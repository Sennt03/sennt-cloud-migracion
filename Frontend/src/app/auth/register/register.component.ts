import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MyValidators } from '@shared/utils/myValidators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup
  maskLoad = new Subject<boolean>()

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      this.buildForm()
    }
  
  private buildForm(){
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email], MyValidators.validateEmail(this.authService)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: MyValidators.matchPasswords
    })
  }

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

  hasError(field, error){
    return this.form.get(field).hasError(error)
  }

  haveErrors(field){
    return this.form.get(field).touched && this.form.get(field).invalid
  }

  register(){
    if(!this.form.valid){
      this.form.markAllAsTouched()
      return
    }

    // this.maskLoad.next(true)
  }

}
