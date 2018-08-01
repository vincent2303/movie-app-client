import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent implements OnInit {

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

}
