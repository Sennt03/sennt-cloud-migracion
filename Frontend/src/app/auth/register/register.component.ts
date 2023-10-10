import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  togglePasswordVisibility(prefix = '') {
    const passId = '#' + prefix + 'password-input'
    const iconId = '.' + prefix + 'icon-password'
    const passwordInput = this.renderer.selectRootElement(passId);
    const passwordIcon = this.renderer.selectRootElement(iconId);
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    const remove = passwordInput.getAttribute('type') === 'password' ? 'fa-eye' : 'fa-eye-slash'
    const add = passwordInput.getAttribute('type') === 'password' ? 'fa-eye-slash' : 'fa-eye'
    this.renderer.setAttribute(passwordInput, 'type', type);
    this.renderer.removeClass(passwordIcon, remove);
    this.renderer.addClass(passwordIcon, add);
  }

  signin(){
    // Animaciones
    // Redireccion
    this.router.navigate(['../login'], { relativeTo: this.route })
  }
}
