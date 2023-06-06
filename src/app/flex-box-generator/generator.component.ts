import { Component } from '@angular/core';

@Component({
  selector: 'app-flex-box-generator',
  template: `
    <div class="container-fluid">
      <div class="row">

        <aside class="col-3">
          <app-flex-container-options></app-flex-container-options>
        </aside>
        <main class="col-6" style="flex-grow: 1;">
          <app-canvas></app-canvas>
        </main>
        <aside class="col-3">
          item options
        </aside>
      </div>
    </div>
  `,
  styles: [''],
})
export class FlexBoxGeneratorComponent {}
