import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

type Step = 'forgotPasswordForm';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.scss']
})
export class PasswordForgetComponent implements OnInit {
  focus: any;
  verifyType = 'phone';
  public forgotPasswordForm: FormGroup;
  public currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('forgotPasswordForm');
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) {
    this.buildForgotPasswordForm();
  }

  ngOnInit(): void {
  }

  changeStep(currentStep: BehaviorSubject<Step>, direction: 'forward' | 'back') {
    switch(currentStep.getValue()) {
      case 'forgotPasswordForm':
        if (direction === 'forward') {

        } else {
          return this._router.navigate(['login']);
        }
        break;
    }
  }

  resendCode() {
    const form = this.currentStepBs.getValue().toString();
    if(this.verifyType === 'phone') {
      // TODO: request new email code
    } else if (this.verifyType === 'email') {
      // TODO: request new phone code
    }
  }

  isFormFieldInvalid(type) {
    const form = this.currentStepBs.getValue().toString();
    return this[form].controls[type].touched && this[form].controls[type].invalid;
  }

  buildForgotPasswordForm() {
    this.forgotPasswordForm = this._formBuilder.group({
      username: ['', [ Validators.required, Validators.maxLength(26)]],
    });
  }
}
