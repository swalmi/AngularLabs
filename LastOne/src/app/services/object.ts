import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  private postsSubject = new BehaviorSubject<any[]>([]);
  public posts$ = this.postsSubject.asObservable();
  private loaded = false;

  constructor(private http: HttpClient) {}

  getAllObjects(): Observable<any[]> {
    if (!this.loaded) {
      this.http.get<any[]>(this.apiUrl).subscribe(posts => {
        this.postsSubject.next(posts.slice(0, 30)); // Load 30 for performance
        this.loaded = true;
      });
    }
    return this.posts$;
  }

  createObject(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, body).pipe(
      tap(newPost => {
        const current = this.postsSubject.value;
        newPost.id = Math.max(...current.map(p => Number(p.id) || 0), 0) + 1;
        this.postsSubject.next([newPost, ...current]);
      })
    );
  }

  updateObject(id: string | number, body: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, body).pipe(
      catchError(err => {
        // Mock API fails on local IDs, return mock so UI continues
        return of({ ...body, id: Number(id) });
      }),
      tap(updatedPost => {
        const current = this.postsSubject.value;
        const index = current.findIndex(p => p.id == id);
        if (index > -1) {
          const newArray = [...current];
          newArray[index] = { ...newArray[index], ...updatedPost };
          this.postsSubject.next(newArray);
        }
      })
    );
  }

  deleteObject(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(err => of(null)), // Mock API fails on local IDs
      tap(() => {
        const current = this.postsSubject.value;
        this.postsSubject.next(current.filter(p => p.id != id));
      })
    );
  }
}
