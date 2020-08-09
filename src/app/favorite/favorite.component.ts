import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 @Input('state') isfavourite = false ;
 @Output() change = new EventEmitter();
  Employee = {
    name: 'mohamed abd elhamed',
    rating : 5.94 ,
    salary : 5000 ,
    hiringdate : new Date(2020, 9, 9)
  };
  news = `The massive explosion has killed at least 73 people with many more feared dead, Lebanon's health minister says`;
  constructor() { }

  ngOnInit() {
  }
  onfavouriteclick()
  {
    this.isfavourite = !this.isfavourite ;
    this.change.emit() ;
  }
}
