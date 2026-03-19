import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productList: Product[] = [
    {
      id: 1,
      name: 'Aura Pro X Headphones',
      price: 349,
      description: 'Experience unparalleled sound clarity with active noise cancellation and spatial audio technology.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      category: 'Headphones',
      quantity: 12,
    },
    {
      id: 2,
      name: 'Velocity True Wireless',
      price: 199,
      description: 'Ultra-compact earbuds delivering massive bass, crystal-clear mids, and all-day battery life.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
      category: 'Earbuds',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Nova Studio Mic',
      price: 159,
      description: 'Professional condenser microphone for podcasting, streaming, and studio-grade vocal recording.',
      image: 'https://images.unsplash.com/photo-1588698054452-9ac911a3ce25?q=80&w=1000&auto=format&fit=crop',
      category: 'Microphone',
      quantity: 8,
    },
    {
      id: 4,
      name: 'Echo Smart Speaker',
      price: 129,
      description: 'High-fidelity intelligent speaker that adapts to the acoustics of your room.',
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1000&auto=format&fit=crop',
      category: 'Smart Home',
      quantity: 15,
    },
    {
      id: 5,
      name: 'Tube Amplifier V2',
      price: 899,
      description: 'A beautifully crafted analog tube amplifier combining vintage warmth with modern precision.',
      image: 'https://images.unsplash.com/photo-1615473461280-928cc21a224f?q=80&w=1000&auto=format&fit=crop',
      category: 'Amplifier',
      quantity: 3,
    },
    {
      id: 6,
      name: 'Orbit Turntable',
      price: 499,
      description: 'Rediscover your vinyl collection with this premium direct-drive turntable featuring a carbon fiber tonearm.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1000&auto=format&fit=crop',
      category: 'Turntable',
      quantity: 5,
    },
    {
      id: 7,
      name: 'Omni Portable Speaker',
      price: 149,
      description: 'Take the party anywhere with 360-degree sound, deep bass, and extreme IP67 water resistance.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
      category: 'Portable Audio',
      quantity: 22,
    },
    {
      id: 8,
      name: 'Phantom Gaming Headset',
      price: 249,
      description: 'Gain the competitive edge with 7.1 surround sound and an ultra-low latency wireless connection.',
      image: 'https://images.unsplash.com/photo-1628202926206-c63a34b19fb2?q=80&w=1000&auto=format&fit=crop',
      category: 'Gaming',
      quantity: 0,
    },
    {
      id: 9,
      name: 'Precision Studio Monitors',
      price: 599,
      description: 'Active nearfield monitors designed for uncolored, flat-response audio mixing and mastering.',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
      category: 'Studio',
      quantity: 7,
    }
  ];

  getProducts(): Product[] {
    return [...this.productList];
  }
}
