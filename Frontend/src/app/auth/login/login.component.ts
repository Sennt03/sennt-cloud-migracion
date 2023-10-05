import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private renderer: Renderer2) {}

  togglePasswordVisibility() {
    const passwordInput = this.renderer.selectRootElement('#password-input');
    if (passwordInput.getAttribute('type') === 'password') {
      this.renderer.setAttribute(passwordInput, 'type', 'text');
    } else {
      this.renderer.setAttribute(passwordInput, 'type', 'password');
    }
  }
}
