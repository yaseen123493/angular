import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

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

  constructor(private route: Router, private loginService: ServicesService) {}

  ngOnInit() {}

  login() {
    if (this.loginService.login(this.user.email, this.user.password)) {
      // this.route.navigate(['/products']);
      this.route.navigateByUrl('/products');
    }
  }
}
