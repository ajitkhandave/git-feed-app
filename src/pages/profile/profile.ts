import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public repo:any;
  public name:any;
  constructor(public navCtrl: NavController, private navParams: NavParams, public githubService:GithubService) {
}

  ngOnInit(){
    this.repo = this.navParams.data.passData;
    this.name = this.navParams.data.userName;
  }

}
