import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.checkLoggedIn();
  }

  sidebarOpen() {
    this.sidebarToggle.emit(true);
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
