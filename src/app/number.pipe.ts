import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';

@Pipe({
  name: 'num'
})
export class NumberPipe implements PipeTransform {

  transform(name: string) {

    // let str = /^[0-9]+$/;
    // console.log(name?.length);
    let n = name?.split('');
    // console.log(n);


    let a = n?.filter(e => e == '1' || e == '2' || e == '3' || e == '4' || e == '5' || e == '6' || e == '7' || e == '8' || e == '9' || e == '0');
    // console.log(a);
    return a;

  }


}
