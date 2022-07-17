import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {confirmedValidator} from "../../core/utils";
import {APP} from "../../core/constants/app.contants";
import {ActivatedRoute, Params, Router} from "@angular/router";

type Step = 'ownerInfoForm' | 'businessInfoForm' | 'businessAddressForm' | 'termsConditionsCheckbox';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  focus: any;
  industries = APP.INDUSTRIES;
  states = APP.STATES;
  public ownerInfoForm: FormGroup;
  public businessInfoForm: FormGroup;
  public businessAddressForm: FormGroup;
  public termsConditionsCheckbox: boolean = false;
  public currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('ownerInfoForm');
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.buildOwnerInfoForm();
    this.buildBusinessInfoForm();
    this.buildBusinessAddressForm();
  }

  changeStep(currentStep: BehaviorSubject<Step>, direction: 'forward' | 'back') {
    switch(currentStep.getValue()) {
      case 'ownerInfoForm':
        if (direction === 'forward') {
          this.ownerInfoForm.markAllAsTouched();
          this.currentStepBs.next('businessInfoForm'); // TODO REMOVE
          // return this.ownerInfoForm.valid ? this.currentStepBs.next('businessInfoForm') : null;
        }
        break;
      case 'businessInfoForm':
        if (direction === 'forward') {
          this.businessInfoForm.markAllAsTouched();
          this.currentStepBs.next('businessAddressForm'); // TODO REMOVE
          // return this.businessInfoForm.valid ? this.currentStepBs.next('businessAddressForm') : null;
        } else {
          this.currentStepBs.next('ownerInfoForm');
        }
        break;
      case 'businessAddressForm':
        if (direction === 'forward') {
          this.businessAddressForm.markAllAsTouched();
          this.currentStepBs.next('termsConditionsCheckbox'); // TODO REMOVE
          // return this.businessAddressForm.valid ? this.currentStepBs.next('termsConditionsCheckbox') : null;
        } else {
          this.currentStepBs.next('businessInfoForm');
        }
        break;
      case 'termsConditionsCheckbox':
        if (direction === 'forward') {
          const queryParams: Params = { id: '123' };
          return this._router.navigate(['verify'], {relativeTo: this._activatedRoute, queryParams,
            // queryParamsHandling: 'merge', // remove to replace all query params by provided
          });
        } else {
          this.currentStepBs.next('businessAddressForm');
        }
        break;
    }
  }

  submitForm() {
    const formValues = this.ownerInfoForm.value;
  }

  isFormFieldInvalid(type) {
    const form = this.currentStepBs.getValue().toString();
    return this[form].controls[type].touched && this[form].controls[type].invalid;
  }

  buildOwnerInfoForm() {
    this.ownerInfoForm = this._formBuilder.group({
      fName: ['', [ Validators.required, Validators.maxLength(26) ]],
      lName: ['', [ Validators.required, Validators.maxLength(26) ]],
      email: ['', [ Validators.required, Validators.email ]],
      phone: ['', [ Validators.required, Validators.pattern('^[0-9]*$'),
        Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [ Validators.required, Validators.minLength(9) ]],
      confirmPassword: ['', [ Validators.required],
        { validator: confirmedValidator('password', 'confirmPassword') }]
    });
  }

  buildBusinessInfoForm() {
    this.businessInfoForm = this._formBuilder.group({
      businessName: ['', [ Validators.required ]],
      dbaName: ['', [ Validators.required ]],
      businessPhone: ['', [ Validators.required, Validators.pattern('^[0-9]*$'),
        Validators.minLength(10), Validators.maxLength(10)]],
      website: ['', [ Validators.required ]],
      industry: ['', [ Validators.required ]]
    });
  }

  buildBusinessAddressForm() {
    this.businessAddressForm = this._formBuilder.group({
      businessAddress: ['', [ Validators.required, Validators.maxLength(26) ]],
      businessAddressContinued: ['', [ Validators.required, Validators.maxLength(26) ]],
      city: ['', [ Validators.required ]],
      zipCode: ['', [ Validators.required, Validators.pattern('^[0-9]*$'),
        Validators.minLength(4)]],
      state: ['', [ Validators.required ]]
    });
  }
}
