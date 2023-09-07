import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  username: string = '';

  constructor(private authService: AuthService) {
    this.username = this.authService.getLoggedInUsername();
  }
}
