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
  formRegister: FormGroup;  // Agregamos un nuevo formulario para el registro

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.formRegister = new FormGroup({
      registerEmail: new FormControl('', [Validators.required, Validators.email]),
      registerPassword: new FormControl('', [Validators.required])
    });
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
          this.router.navigate(['/main']);
          loading!.hidden = true;
        }, 1000);
      })
      .catch(error => {
        console.error('Error de inicio de sesión:', error);
        this.show();
        loading!.hidden = true;
        loginButton?.removeAttribute("disabled");
      });
  }

  onRegister() {
    let loading = document.getElementById("spinner");
    let registerButton = document.getElementById("registerButton");
    loading!.hidden = false;
    registerButton!.setAttribute("disabled", "disabled");

    this.userService.register(this.formRegister.value)
      .then(response => {
        console.log('Usuario registrado exitosamente:', response);
        // Puedes hacer algo después de que el usuario se ha registrado
      })
      .catch(error => {
        console.error('Error al registrar usuario:', error);
        // Puedes manejar el error de registro aquí
      })
      .finally(() => {
        loading!.hidden = true;
        registerButton?.removeAttribute("disabled");
      });
  }

  isFormInvalid(): boolean {
    return this.formLogin.invalid || this.formLogin.get('email')!.value === '1' || this.formLogin.get('password')!.value === '1';
  }

  isRegisterFormInvalid(): boolean {
    return this.formRegister.invalid || this.formRegister.get('registerEmail')!.value === '1' || this.formRegister.get('registerPassword')!.value === '1';
  }
  goToRegister() {
    this.router.navigate(['/register']);  // Reemplaza '/register' con la ruta de tu página de registro
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
export class LoginModule { }
