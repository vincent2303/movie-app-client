import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

}
