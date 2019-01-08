import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarClose = new EventEmitter<boolean>();
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.sidebarClose.emit(true);
  }

  logout() {
    this.authService.logout();
    this.close();
    this.router.navigate(['/login']);
  }

}
