import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './shared/sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { TextLayoutComponent } from './layouts/text-laylout/text-layout.component';
import {RegisterComponent} from "./shared/register/register.component";
import {LoginComponent} from "./shared/login/login.component";
import {P500Component} from "./shared/error/500.component";
import {P403Component} from "./shared/error/403.component";
import {P404Component} from "./shared/error/404.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TermsConditionsComponent} from "./shared/terms-conditons/terms-conditions.component";
import {ScrollTrackerDirective} from "./core/directives/scroll-tracker.directives";
import { IdentityVerifyComponent } from './shared/identity-verify/identity-verify.component';


@NgModule({
  declarations: [
    AppComponent,
    TextLayoutComponent,
    RegisterComponent,
    LoginComponent,
    TermsConditionsComponent,
    P404Component,
    P403Component,
    P500Component,
    ScrollTrackerDirective,
    IdentityVerifyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
