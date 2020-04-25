import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(value: string) {
    const valueAsInt = parseInt(value);
    if (!isNaN(valueAsInt)) {
      this.length = valueAsInt;
    }
  }

  generatePassword() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    console.log(generatedPassword);
    this.password = generatedPassword;

  }
  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }
  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
