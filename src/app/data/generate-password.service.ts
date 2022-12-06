import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeneratePassword } from './generate-password';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {
  options = [
    {
      "id": "letters",
      "library": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPWRSTUVWXYZ",
    }, {
      "id": "numbers",
      "library": "0123456789",
    }, {
      "id": "symbols",
      "library": "!@#$%^&*-_=+\\|:;',.\<>/?~",
    }
  ];
 
  constructor() { }

  getGeneratePassword(dataPassword: GeneratePassword): Observable<GeneratePassword>{
    var optionsSelected: Array<string> = [];
    if (dataPassword.useLetters) {
      var letters = this.options[0].library.split('');
      letters.forEach(letter => {
        optionsSelected.push(letter);
      });
    }
    if (dataPassword.useNumbers) {
      var numbers = this.options[1].library.split('');
      numbers.forEach(number => {
        optionsSelected.push(number);
      });
    }
    if (dataPassword.useSymbols) {
      var symbols = this.options[2].library.split('');
      symbols.forEach(symbol => {
        optionsSelected.push(symbol);
      });
    }


    var newPassword = "";
    for (var i = 0; i < dataPassword.length; i++) {
      newPassword += optionsSelected[Math.floor(Math.random() * optionsSelected.length)];
    }

    dataPassword.password = newPassword;
    return of(dataPassword);
  }
}
