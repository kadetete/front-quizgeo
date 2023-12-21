import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { HomeComponent } from './home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';
import { InputSwitchModule } from 'primeng/inputswitch';
import{ FormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    TabMenuModule,
    TabViewModule,
    CarouselModule,
    FormsModule,
    InputSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
