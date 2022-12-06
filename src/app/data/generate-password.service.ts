import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeneratePassword } from './generate-password';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {

  constructor() { }

  getGeneratePassword(dataPassword: GeneratePassword): Observable<any>{
    dataPassword.password = 'khsakjdhs&!ADH';
    return of(dataPassword);
  }
}
