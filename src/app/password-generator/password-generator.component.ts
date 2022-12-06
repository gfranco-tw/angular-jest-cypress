import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneratePassword } from '../data/generate-password';
import { GeneratePasswordService } from '../data/generate-password.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  text: string = '';
  generatePassword: GeneratePassword = {
    length: 8,
    useLetters: false,
    useNumbers: false,
    useSymbols: false,
    password: "",
    minLength:4
  }
  errorMessage: string = '';
  errorLength: string = '';
  
  
  constructor(private generateService: GeneratePasswordService) {
    // this.text = 'Button was clicked';
  }

  generateClicked() {
    console.log(this.text);
  }

  validateForm(): boolean{
    this.errorMessage = "";
    this.errorLength = "";
    var isValid = true;

    if (this.generatePassword.length < this.generatePassword.minLength || this.generatePassword.length > 40) {
      isValid = false;      
      this.errorLength = "Please, length range should be between 4 and 40";
    }

    if (!this.generatePassword.useLetters && !this.generatePassword.useNumbers && !this.generatePassword.useSymbols) {
      isValid = false;
      this.errorMessage = "Please select at least one option";
    }
    return isValid;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid, this.validateForm());
    this.errorMessage = '';
    if (form.valid && this.validateForm()) {
      this.generateService.getGeneratePassword(this.generatePassword).subscribe(
        result => console.log("password ==>", result)
      );
    } 
  }
}
