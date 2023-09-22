import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private route: Router,
    private loginService: ServicesService,
    private cookie: CookieService
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginService.login(this.user.email, this.user.password)) {
      // this.route.navigate(['/products']);
      this.cookie.set(
        'TEST_COOKIE',
        'qertyuiopasdfghjklzxcvbnm1234567890mnbvcxz09876543210',
        1
      );
      this.route.navigateByUrl('/products');
    }
  }
}
