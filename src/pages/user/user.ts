import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import { GithubService } from '../../providers/github-service';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  public userDetail:any;
  public repos:any;

  constructor(public navCtrl: NavController, private navParams: NavParams, public githubService:GithubService) {
    console.log("navparams",navParams);
  }

  ngOnInit(){
    this.userDetail = this.navParams.data;
  }

  viewProfile(repoUrl:string,name:string){
      this.githubService.getAllRepos(repoUrl).subscribe(
            data =>{
              this.repos = data;
              console.log('name:string', name);
              this.navCtrl.push(ProfilePage,{"passData" :this.repos, "userName" : name});
            },
            error => {
              console.log("from error");
            }
          );
    }

}
