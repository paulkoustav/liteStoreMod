import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'netPayPipe'
})
export class NetPayPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
