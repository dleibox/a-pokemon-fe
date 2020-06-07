import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toimage' })
export class ToImagePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value) {
            value = value.replace('https://pokeapi.co/api/v2/pokemon/', 'https://pokeres.bastionbot.org/images/pokemon/').slice(0, -1) + '.png';
        }
        return value;
    }
}
