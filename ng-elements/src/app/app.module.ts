import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { FancyFormComponent, FancyFormModule } from 'fancy-form';

@NgModule({
  imports: [FancyFormModule],
  entryComponents: [FancyFormComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const stratFac = new ElementZoneStrategyFactory(
      FancyFormComponent,
      this.injector
    );
    const custom = createCustomElement(FancyFormComponent, {
      injector: this.injector,
      strategyFactory: stratFac,
    });
    customElements.define('el-fancy-form', custom);
  }
}
