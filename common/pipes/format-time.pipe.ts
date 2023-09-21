import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatTime' })
export class FormatTime implements PipeTransform {
    transform(value: string): string {
        const intValue = parseInt(value);
        return new Date(intValue * 1000).toISOString().substr(11, 8);
    }
}
