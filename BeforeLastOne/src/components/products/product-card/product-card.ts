import { ChangeDetectionStrategy, Component, OnDestroy, input } from '@angular/core';
import { Product } from '../../../app/models/product';
import { ShortenDescriptionPipe } from '../../../app/pipes/shorten-description.pipe';
import { ReusableCard } from '../../shared/reusable-card/reusable-card';

@Component({
  selector: 'app-product-card',
  imports: [ReusableCard, ShortenDescriptionPipe],
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard implements OnDestroy {
  readonly product = input.required<Product>();

  ngOnDestroy(): void {
    console.log(`ProductCard destroyed: ${this.product().name}`);
  }
}
