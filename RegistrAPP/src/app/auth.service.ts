import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
    // Validación de correo electrónico
    if (
      !email.endsWith('@duocuc.cl') &&
      !email.endsWith('@profesor.duoc.cl') &&
      !email.endsWith('@adminduoc.cl')
    ) {
      return 'El correo electrónico no es válido';
    }

    // Validación de usuario
    if (nombre.length <= 5) {
      return 'El nombre debe tener más de 5 caracteres';
    }

    // Validación de contraseña
    if (password.length <= 5) {
      return 'La contraseña debe tener más de 5 caracteres';
    }

    // Validación de Rut (9 caracteres)
    if (rut.length < 9 || rut.length > 10) {
      return 'Ingresa tu RUT en este formato: XXXXXXXX-X';
    }

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
  
}
