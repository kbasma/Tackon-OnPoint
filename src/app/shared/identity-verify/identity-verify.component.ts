import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {confirmedValidator} from "../../core/utils";

type Step = 'emailVerifyForm' | 'phoneVerifyFrom' | 'accountCreatedView';

@Component({
  selector: 'app-identity-verify',
  templateUrl: './identity-verify.component.html',
  styleUrls: ['./identity-verify.component.scss']
})
export class IdentityVerifyComponent implements OnInit {
  focus: any;
  public emailVerifyForm: FormGroup;
  public phoneVerifyFrom: FormGroup;
  public currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('emailVerifyForm');
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.buildEmailVerifyForm();
    this.buildPhoneVerifyForm();
  }

  ngOnInit(): void {
  }

  changeStep(currentStep: BehaviorSubject<Step>, direction: 'forward') {
    switch(currentStep.getValue()) {
      case 'emailVerifyForm':
        if (direction === 'forward') {
          this.currentStepBs.next('phoneVerifyFrom');
        }
        break;
      case 'phoneVerifyFrom':
        if (direction === 'forward') {
          this.currentStepBs.next('accountCreatedView');
        }
        break;
      case 'accountCreatedView':
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

  buildEmailVerifyForm() {
    this.emailVerifyForm = this._formBuilder.group({
      digit1: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit2: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit3: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit4: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit5: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit6: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  buildPhoneVerifyForm() {
    this.phoneVerifyFrom = this._formBuilder.group({
      digit1: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit2: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit3: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit4: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit5: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      digit6: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
}
