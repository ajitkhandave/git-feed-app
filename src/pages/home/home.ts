import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserPage} from "../user/user";
import { GithubService } from '../../providers/github-service';
import {LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users:any[];
  public myInput:string;
  public loader:any;
  public userDetails:any;

  constructor(public navCtrl: NavController, public githubService:GithubService, public loadingCtrl: LoadingController) {

  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers():any{
    this.githubService.getUsers().subscribe(
      data =>{
        this.users = data;
      },
      error => {
        console.log("from error");
      }
    );
  }

  userInfo(profileUrl:string){
   this.githubService.getUserDetails(profileUrl).subscribe(
         data =>{
           this.userDetails = data;
           console.log("details",this.userDetails)
           this.navCtrl.push(UserPage,this.userDetails);
         },
         error => {
           console.log("from error");
         }
    );

  }

  onInput(event:Event){
    console.log("event",this.myInput);
    setTimeout(() => {if(this.myInput != ''){
      this.getUsersByName(this.myInput);
    }else{
      this.getUsers();
    }},500);
  }

  getUsersByName(loginName:string):any{
    this.githubService.getUserByLoginName(loginName).subscribe(
      data =>{
        this.users = data.items;
      },
      error => {
        console.log("from error");
      }
    );
  }

}
