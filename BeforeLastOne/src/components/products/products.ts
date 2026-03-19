import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Product } from '../../app/models/product';
import { ProductService } from '../../app/services/product.service';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products implements OnInit, AfterViewInit, OnDestroy {
  private readonly productService = inject(ProductService);

  protected readonly products = signal<Product[]>([]);
  protected readonly lifecycleLogs = signal<string[]>([]);

  ngOnInit(): void {
    const products = this.productService.getProducts();

    this.products.set(products);
    this.addLog(`ngOnInit: fetched ${products.length} products from ProductService.`);
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.addLog('ngAfterViewInit: Product list rendered in the view.');
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Products component destroyed.');
  }

  private addLog(message: string): void {
    console.log(message);
    this.lifecycleLogs.update((logs) => [...logs, message]);
  }
}
