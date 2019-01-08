import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: User = {
    id: '', name: '', password: '', email: '', firstname: '',
    lastname: '', nicename: '', display_name: '', sleeptype: '', sleeptype_text: '', sleeptype_image: '',
  };
  private error: any;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: any): void {
    // All with the auth service
    // Authenticate with the input of username and password
    this.authService.loginUser(email, password).subscribe(
      // If it works
      data => {
        // Access token and refresh token needs to be put in localstorage
        console.log(data);

        localStorage.setItem('token', data.token);
        localStorage.setItem('user_email', data.user_email);
        localStorage.setItem('user_nicename', data.user_nicename);
        localStorage.setItem('user_display_name', data.user_display_name);
        // Navigate to a private route
        this.authService.getCurrentUser().subscribe(

          data1 => {
            // Access token and refresh token needs to be put in localstorage
            console.log(data);

            localStorage.setItem('user_id', data1.id);
            localStorage.setItem('user_name', data1.name);
          });
        this.router.navigate(['/home']);
        //         setTimeout(() => this.router.navigate(['home']));
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.error = err.error.message;
      }
    );

  }

}
