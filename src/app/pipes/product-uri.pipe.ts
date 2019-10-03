import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUri'
})
export class ProductUriPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
