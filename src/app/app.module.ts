import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AllowNumbersOnly } from 'src/shared/directives/allownumbersonly.directive';

@NgModule({
  declarations: [AppComponent, PasswordGeneratorComponent, AllowNumbersOnly],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
