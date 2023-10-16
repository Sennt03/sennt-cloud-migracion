import { Component, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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

  hasError(field, error){
    console.log('hasError', field)
    console.log(this.form.get(field).errors)
    return this.form.get(field).hasError(error)
  }

  haveErrors(field){
    return this.form.get(field).touched && this.form.get(field).invalid
  }

  login(){
    if(!this.form.valid){
      this.form.markAllAsTouched()
      return
    }

    this.maskLoad.next(true)
    this.authService.login(this.form.value).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.maskLoad.next(false)
        }, 3000);
        // this.authService.saveAuth(res)
        // this.form.markAsUntouched()
        // this.router.navigate(['/'])
      },
      error: (err) => {
        this.maskLoad.next(false)
        console.log('Error: ', err)
      }
    })
  }

}
