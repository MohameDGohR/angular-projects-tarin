import { Pipe, PipeTransform, Optional } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string ,  limit?: number ): unknown {
      if (!value) { return null ; }
      const actuallimit = (limit) ? limit : 20 ;
      return value.substring(0, actuallimit) + '.............' ;
  }

}
