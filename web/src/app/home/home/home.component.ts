import { Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(`選單狀態: ${result}`);
    });
  }

}
