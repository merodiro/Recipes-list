import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
