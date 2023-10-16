import { Component, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {
      this.buildForm()
    }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  togglePasswordVisibility() {
    const passwordInput = this.renderer.selectRootElement('#password-input');
    const passwordIcon = this.renderer.selectRootElement('.icon-password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    const remove = passwordInput.getAttribute('type') === 'password' ? 'fa-eye' : 'fa-eye-slash'
    const add = passwordInput.getAttribute('type') === 'password' ? 'fa-eye-slash' : 'fa-eye'
    this.renderer.setAttribute(passwordInput, 'type', type);
    this.renderer.removeClass(passwordIcon, remove);
    this.renderer.addClass(passwordIcon, add);
  }

  signup(){
    // Animaciones
    // Redireccion
    this.router.navigate(['../register'], { relativeTo: this.route })
  }

  login(){
    if(!this.form.valid){
      this.form.markAllAsTouched()
      return
    }
  }

  hasError(field, error){
    console.log('hasError', field)
    console.log(this.form.get(field).errors)
    return this.form.get(field).hasError(error)
  }

  haveErrors(field){
    return this.form.get(field).touched && this.form.get(field).invalid
  }

}
