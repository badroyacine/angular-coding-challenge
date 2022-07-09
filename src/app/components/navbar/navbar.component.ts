import { Component, OnInit } from '@angular/core';
import { menuCategories } from 'src/app/utils/categories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuCategories: any [] = [...menuCategories];
  isMenuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.isMenuOpened = true;
  }

  closeMenu(){
    this.isMenuOpened = false;
  }
}
