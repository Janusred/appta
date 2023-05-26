import { Component, NgModule, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  show() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuario incorrecto' });
  }
  onSubmit() {

    let loading = document.getElementById("spinner");
    let loginButton = document.getElementById("loginButton");
    loading!.hidden = false;
    loginButton!.setAttribute("disabled", "disabled");
    this.userService.login(this.formLogin.value)
      .then(response => {
        setTimeout(() => {
          this.router.navigate(['/main'])
          loading!.hidden = true;
        }, 1000)
      })
    setTimeout(() => {
      debugger
      let input = document.getElementById("floatingInput");
      let password = document.getElementById("floatingPassword");

      input?.classList.add('ng-dirty');
      password?.classList.add('ng-dirty');
      loading!.hidden = true;
      loginButton?.removeAttribute("disabled");
      this.show();
    }, 2000)
  }

  isFormInvalid(): boolean {
    return this.formLogin.invalid || this.formLogin.get('email')!.value === '' || this.formLogin.get('password')!.value === '';
  }
}

@NgModule({
  imports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule

  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {

}


