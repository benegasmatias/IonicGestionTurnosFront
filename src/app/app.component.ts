import { Component } from '@angular/core';

import { Platform} from '@ionic/angular';



import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash =true;
  constructor(
    private platform: Platform,
 
    private menu: MenuController
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
     
      
    });
    
  
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  closeMenu() {
    this.menu.close();
  }

}
