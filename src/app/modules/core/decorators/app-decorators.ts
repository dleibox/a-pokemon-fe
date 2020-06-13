import { environment } from 'src/environments/environment';

export function Log(): ClassDecorator {
    return function (target: any) {
        if (!environment.production) {
            console.log(`%c= ${target.name} =`, 'color: skyblue');
        }

        Object.getOwnPropertyNames(target.prototype).forEach((n) => {
            const fn = target.prototype[n];
            target.prototype[n] = function () {
                console.log(`%c${fn.name}`, 'color: green');
                return fn.apply(this, arguments);
            };
        });
    };
}
