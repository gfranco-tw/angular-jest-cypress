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
  text: String = '';
  generatePassword: GeneratePassword = {
    length: 8,
    useLetters: true,
    useNumbers: false,
    useSymbols: false,
    password: ""
  }

  constructor(private generateService: GeneratePasswordService) {
    // this.text = 'Button was clicked';
  }

  generateClicked() {
    console.log(this.text);
  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.generateService.getGeneratePassword(this.generatePassword).subscribe(
        result => console.log("password ==>", result)
      );
    }
  }
}
