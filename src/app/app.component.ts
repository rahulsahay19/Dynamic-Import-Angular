import { Component, ViewChild, ViewContainerRef, SystemJsNgModuleLoader, Injector, NgModuleFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Module Loading Demo';

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
      constructor(private loader: SystemJsNgModuleLoader, private inj: Injector) {
      }

      ngOnInit() {
        this.loader.load('app/lazy/lazy.module#LazyModule').then((moduleFactory: NgModuleFactory<any>) => {
            const entryComponent = (<any>moduleFactory.moduleType).entry;
            const moduleRef = moduleFactory.create(this.inj);

            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
            console.log('compFactory:- ',compFactory);
            this.container.createComponent(compFactory);
        });
    }
  
}
