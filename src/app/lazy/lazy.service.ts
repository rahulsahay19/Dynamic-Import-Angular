import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {

    constructor() { }

    logToConsole(input:string):void{
        console.log('Message coming from lazy service:- ',input);
    }
}