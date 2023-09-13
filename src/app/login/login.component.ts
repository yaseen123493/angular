import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) {}

  ngOnInit() {}

  login() {
    if (this.user.email && this.user.password) {
      // this.route.navigate(['/products']);
      this.route.navigateByUrl('/products');
    }
  }
}
