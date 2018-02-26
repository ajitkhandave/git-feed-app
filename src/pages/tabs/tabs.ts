import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
constructor(public navCtrl: NavController) {}
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  redirectHome(){
    this.navCtrl.push(HomePage);
  }
  redirectAbout(){
    this.navCtrl.push(AboutPage);
  }
  redirectContact(){
    this.navCtrl.push(ContactPage);
  }


}
