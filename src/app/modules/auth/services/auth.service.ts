import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public age = 0
  private name = 'Juan'

  constructor() { }

  public sendCredentials(email:string, password: string): void {
    console.log('okok', email, password);


  }
}
