import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message',
})
export class MessagePipe implements PipeTransform {
  transform(value: string, limit: number) {
    return value.substring(0, limit) + '...';
  }
}
