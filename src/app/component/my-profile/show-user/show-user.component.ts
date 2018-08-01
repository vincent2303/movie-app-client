import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  private profileEdition: boolean = false
  private newUrl: String = ""

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

  EditButton(){
    this.profileEdition = !this.profileEdition
  }

  changeProfileImage(){
    this.myAccountService.userUpdate({urlImage: this.newUrl})
  }
}
