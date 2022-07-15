import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: 'terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {
  read = false;
  constructor(
  ) { }

  ngOnInit() { }

  trackScroll(event) {
    let element = event.target
    let isLimitReached = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 3;
    if (isLimitReached === true) {
      this.read = true;
    }
  }
}
