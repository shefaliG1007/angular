import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(input: Array<any>, initKey: string = '', sep = ','): string {
        let arr = [];
        if (initKey !== '') {
            input.map(a => {
                arr.push(' ' + a[initKey]);
            });
        } else {
            arr = input;
        }
        console.log(arr);
        return arr.join(sep);
    }
}
