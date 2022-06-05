import { Component } from "@angular/core";

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./spinner.component.css']
})


export class SpinnerComponent {}