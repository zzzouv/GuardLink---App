import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginUsuario = '';
  loginContrasena = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  validarCredenciales() {
    const credentials = {
      username: this.loginUsuario,
      password: this.loginContrasena
    };

    this.usuarioService.login(credentials).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        alert('Inicio de sesión exitoso. Bienvenido.');
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Usuario o contraseña incorrectos.');
      }
    );
  }
}
