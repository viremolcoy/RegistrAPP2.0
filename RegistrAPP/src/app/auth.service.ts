import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = [];
  private loggedInEmail: string = '';

  constructor() { }

  register(
    nombre: string,
    apellido: string,
    rut: string,
    email: string,
    password: string
  ): string {
    this.users.push({ nombre, apellido, rut, email, password });
    return 'Registro exitoso';
  }

  login(email: string, password: string): boolean {
    try {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.loggedInEmail = user.email;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error en el proceso de inicio de sesión:', error);
      return false;
    }
  }

  resetPassword(email: string, newPassword: string) {
    const user = this.users.find(u => u.email === email);
    if (user) {
      user.password = newPassword;
    }
  }

  getLoggedInEmail(): string {
    return this.loggedInEmail;
  }

  logout() {
    // Elimina la información de autenticación del usuario, como el email
    this.loggedInEmail = ''; // Actualiza la propiedad loggedInEmail
    // Puedes realizar otras tareas de limpieza aquí si es necesario
  }

  getUserByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }
}
