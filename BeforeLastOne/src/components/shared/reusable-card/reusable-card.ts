import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  imports: [],
  templateUrl: './reusable-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableCard {}
