import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {confirmedValidator} from "../../core/utils";
import {Router} from "@angular/router";

type Step = 'optionsForm' | 'verifyForm' | 'loginSuccess';

@Component({
  selector: 'app-identity-verify',
  templateUrl: './identity-login-verify.component.html',
  styleUrls: ['./identity-login-verify.component.scss']
})
export class IdentityLoginVerifyComponent implements OnInit {
  focus: any;
  verifyType = 'phone';
  public optionsForm: FormGroup;
  public verifyForm: FormGroup;
  public currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('optionsForm');
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) {
    this.buildPhoneVerifyForm();
  }

  ngOnInit(): void {
  }

  changeStep(currentStep: BehaviorSubject<Step>, direction: 'forward' | 'back') {
    switch(currentStep.getValue()) {
      case 'optionsForm':
        if (direction === 'forward') {
          this.currentStepBs.next('verifyForm');
        } else {
          return this._router.navigate(['verify']);
        }
        break;
      case 'verifyForm':
        if (direction === 'forward') {
          this.currentStepBs.next('loginSuccess');
        } else {
          this.currentStepBs.next('optionsForm');
        }
        break;
      case 'loginSuccess':
        break;
    }
  }

  resendCode() {
    const form = this.currentStepBs.getValue().toString();
    if(form === 'emailVerifyForm') {
      // TODO: request new email code
    } else if (form === 'phoneVerifyFrom') {
      // TODO: request new phone code
    }
  }

  isFormFieldInvalid(type) {
    const form = this.currentStepBs.getValue().toString();
    return this[form].controls[type].touched && this[form].controls[type].invalid;
  }

  goDashboard() {
    return this._router.navigate(['dashboard']);
  }

  buildPhoneVerifyForm() {
    this.verifyForm = this._formBuilder.group({
      digit1: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit2: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit3: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit4: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit5: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit6: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
}
