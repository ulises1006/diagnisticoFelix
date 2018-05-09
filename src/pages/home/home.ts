import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes= [
      {
        img:'assets/img/han-solo.jpg',
        nombre: 'Han Solo',
        titulo: 'Cazarrecompensas'
      },
      {
        img:'assets/img/rey.jpg',
        nombre: 'Rey',
        titulo: 'Recolectora'
      },
      {
        img:'assets/img/finn.jpg',
        nombre: 'Finn',
        titulo: 'Piloto'
      },
      {
        img:'assets/img/leia.jpg',
        nombre: 'Leia',
        titulo: 'Princesa'
      },
    ];
    
  }

  goToDetails(item){
    this.navCtrl.push(DetailsPage, {item:item});
  }

}
