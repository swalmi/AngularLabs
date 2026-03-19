import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider implements OnInit, OnDestroy {
  protected readonly slides: Slide[] = [
    {
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&auto=format&fit=crop&q=80',
      title: 'Premium Watches',
      subtitle: 'Timeless elegance crafted for every moment',
      cta: 'Shop Now',
    },
    {
      image:
        'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1600&auto=format&fit=crop&q=80',
      title: 'Luxury Fragrances',
      subtitle: 'Find your signature scent from our exclusive collection',
      cta: 'Explore',
    },
    {
      image:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&auto=format&fit=crop&q=80',
      title: 'Sport Footwear',
      subtitle: 'Performance meets style — built for champions',
      cta: 'Shop Sneakers',
    },
  ];

  protected readonly current = signal(0);
  protected readonly animating = signal(false);
  protected readonly translateX = computed(() => `translateX(-${this.current() * 100}%)`);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  protected goTo(index: number): void {
    this.current.set(index);
  }

  protected prev(): void {
    this.current.update((c) => (c === 0 ? this.slides.length - 1 : c - 1));
  }

  protected next(): void {
    this.current.update((c) => (c === this.slides.length - 1 ? 0 : c + 1));
  }

  protected pauseAutoPlay(): void {
    this.stopAutoPlay();
  }

  protected resumeAutoPlay(): void {
    this.startAutoPlay();
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => this.next(), 4000);
  }

  private stopAutoPlay(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
