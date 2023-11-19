import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInEmailKey = 'loggedInEmail';
  private usersKey = 'users';

  constructor() {}

  private getUsers(): any[] {
    const storedUsers = localStorage.getItem(this.usersKey);
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  private setUsers(users: any[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  private get loggedInEmail(): string {
    return localStorage.getItem(this.loggedInEmailKey) || '';
  }

  private set loggedInEmail(email: string) {
    localStorage.setItem(this.loggedInEmailKey, email);
  }

  register(
    nombre: string,
    apellido: string,
    rut: string,
    email: string,
    password: string
  ): string {
    const users = this.getUsers();
    users.push({ nombre, apellido, rut, email, password });
    this.setUsers(users);
    return 'Registro exitoso';
  }

  login(email: string, password: string): boolean {
    try {
      const users = this.getUsers();
      const user = users.find((u) => u.email === email && u.password === password);
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
    const users = this.getUsers();
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      this.setUsers(users);
    }
  }

  getLoggedInEmail(): string {
    return this.loggedInEmail;
  }

  logout() {
    this.loggedInEmail = '';
  }

  getUserByEmail(email: string) {
    const users = this.getUsers();
    return users.find((u) => u.email === email);
  }
}
