import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: Boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user
      .subscribe(authenticated => {
        if (!authenticated) {
          this.isAuth = false
        } else {
          this.isAuth = true
        }
      });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
