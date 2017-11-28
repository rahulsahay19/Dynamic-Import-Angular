import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [LazyComponent],
    entryComponents:[LazyComponent],
    providers: [],
})
export class LazyModule { 
    static entry = LazyComponent;
}
