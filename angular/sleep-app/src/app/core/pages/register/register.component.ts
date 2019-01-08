import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private user: User = {
    id: '', name: '', password: '', email: '', firstname: '',
    lastname: '', nicename: '', display_name: '', sleeptype: '', sleeptype_text: '', sleeptype_image: '',
  };
  private error: any;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register(username: string, firstname: string, lastname: string, email: string, password: any, ): void {
    this.authService.registerUser(username, firstname, lastname, email, password).subscribe(
      data => {
        // Access token needs to be put in localstorage
        console.log(data);
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }

}
