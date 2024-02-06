// ##inline template style demo##

import { Component } from '@angular/core';




@Component({
  selector: 'app-both',
  template: `
    <h2 class = "custom2">
      both works!
    </h2>
  `,
  styles: [
    `.custom2{color:yellow}`
  ]
})
export class BothComponent {

}
