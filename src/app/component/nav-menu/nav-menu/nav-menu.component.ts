import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

}
