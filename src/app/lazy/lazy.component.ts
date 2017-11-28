import { Component, OnInit } from '@angular/core';
import { LazyService } from './lazy.service';

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.component.html',
    styles:['./lazy.component.css'],
    providers:[LazyService]
})

export class LazyComponent implements OnInit {
    constructor(private lazyService:LazyService) { 
        lazyService.logToConsole('Message Injected from Lazy Component');
    }

    ngOnInit() { }
}