import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription',
})
export class ShortenDescriptionPipe implements PipeTransform {
  transform(value: string, wordLimit = 4): string {
    if (!value) {
      return '';
    }

    const words = value.trim().split(/\s+/);

    if (words.length <= wordLimit) {
      return value;
    }

    return `${words.slice(0, wordLimit).join(' ')}...`;
  }
}
