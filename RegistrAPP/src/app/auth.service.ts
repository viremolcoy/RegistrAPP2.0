import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];
  private loggedInUsername: string = '';

  constructor() { }

  register(username: string, password: string) {
    this.users.push({ username, password });
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUsername = username;
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

  logout() {
    // Elimina la información de autenticación del usuario, como el nombre de usuario o token
    this.loggedInUsername = ''; // Esto supone que tienes una propiedad loggedInUsername
    // Puedes realizar otras tareas de limpieza aquí si es necesario
  }
  
}
