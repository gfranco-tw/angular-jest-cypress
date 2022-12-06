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
    password: ""
  }
  errorMessage: string = '';
  
  
  constructor(private generateService: GeneratePasswordService) {
    // this.text = 'Button was clicked';
  }

  generateClicked() {
    console.log(this.text);
  }

  validateCheckboxes(): boolean{
    this.errorMessage = "";
    var isValid = false;
    if (this.generatePassword.useLetters || this.generatePassword.useNumbers || this.generatePassword.useSymbols) {
      isValid = true;
    } else {
      this.errorMessage = "Please select at least one option";
    }
    return isValid;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid, this.validateCheckboxes());
    this.errorMessage = '';
    if (form.valid && this.validateCheckboxes()) {
      this.generateService.getGeneratePassword(this.generatePassword).subscribe(
        result => console.log("password ==>", result)
      );
    } 
  }
}
