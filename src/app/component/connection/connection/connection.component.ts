import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  private registerData = {
    name: "",
    email: "",
    password: ""
  }

  private loginData = {
    email: "",
    password: ""
  }

  private sucessRegister: String

  constructor(private myAccountService: MyAccountService) { }

  ngOnInit() {
  }

  private register(){
    this.myAccountService.register(this.registerData).subscribe(res=>{
      if(res=="user added"){
        this.sucessRegister = "sucess"
      }
      else{
        this.sucessRegister = "fail..."
      }
    })
  }

  private login(){
    this.myAccountService.login(this.loginData)
  }

  private logout(){
    this.myAccountService.logout()
  }

}
