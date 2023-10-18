import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];
  private loggedInUsername: string = '';
  private loggedInEmail: string = '';

  constructor() { }

  register(username: string, email: string, password: string): string {
    // Validación de correo electrónico
    if (
      !email.endsWith('@duocuc.cl') &&
      !email.endsWith('@profesor.duoc.cl') &&
      !email.endsWith('@adminduoc.cl')
    ) {
      return 'El correo electrónico no es válido';
    }

    // Validación de usuario
    if (username.length <= 5) {
      return 'El nombre de usuario debe tener más de 5 caracteres';
    }

    // Validación de contraseña
    if (password.length <= 5) {
      return 'La contraseña debe tener más de 5 caracteres';
    }

    this.users.push({ username, email, password });
    return 'Registro exitoso';
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedInUsername = user.username; 
      return true;
    } else {
      return false;
    }
  }

  resetPassword(username: string, newPassword: string) {
    const user = this.users.find(u => u.username === username);
    if (user) {
      user.password = newPassword;
    }
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }

  getLoggedInEmail(): string {
    return this.loggedInEmail;
  }

  logout() {
    // Elimina la información de autenticación del usuario, como el nombre de usuario o token
    this.loggedInUsername = ''; // Esto supone que tienes una propiedad loggedInUsername
    // Puedes realizar otras tareas de limpieza aquí si es necesario
  }
  
}
