import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CookieService],
})
export class HeaderComponent {
  title = 'ANGULAR APPLICATION';
  constructor(private cookieService: CookieService, private route: Router) {}
  logout() {
    this.cookieService.deleteAll();
    this.route.navigate(['/logout']);
  }
}
