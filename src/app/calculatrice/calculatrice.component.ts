import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  affichage = '0';
  valeur= ''

  calcule(value:string) {
    this.valeur = this.valeur + value
    this.affichage = this.valeur

  }

  egale(){
    this.affichage = eval(this.valeur)
    this.valeur = this.affichage
  }

  reset() {
    this.valeur = ''
    this.affichage = this.valeur
  }

  pourCent() {
    this.affichage = eval(this.valeur+ "/100")
    this.valeur = this.affichage
  }
}
