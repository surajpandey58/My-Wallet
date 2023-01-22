import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditLists = [
    {
      date        : '9/02/2018',
      description : '(25180km)Petrol @HP Moolakadai',
      amount      : 300,
      category    : 'vehicle',
      icon        : 'directions_bike'
    },
    {
      date        : '17/12/2017',
      description : 'Chrismas dress @Arihant Shopping',
      amount      : 2000,
      category    : 'home',
      icon        : 'home'
    },
    {
      date        : '18/12/2017',
      description : 'Water Heater @Amazon Shopping',
      amount      : 660,
      category    : 'home',
      icon        : 'home'
    },
    {
      date        : '18/12/2017',
      description : 'Watter Bottle 500ml @Amazon Shopping',
      amount      : 88,
      category    : 'home',
      icon        : 'home'
    }
  ];
  
  totalNumber(data){
    let total = 0;
    data.forEach((d) => {
      total += parseInt(d.amount);
    });
    return total;
  };

  constructor() { }

  ngOnInit() {
  }

}
