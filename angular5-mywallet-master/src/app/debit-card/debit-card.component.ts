import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {
  
  debitLists = [
    {
      date        : '9/02/2018',
      description : '(25180km)Petrol @HP Moolakadai',
      amount      : 300,
      category    : 'vehicle',
      icon        : 'directions_bike'
    },
    {
      date        : '13/02/2018',
      description : 'Mixtures foods',
      amount      : 100,
      category    : 'home',
      icon        : 'home'
    },
    {
      date        : '15/02/2018',
      description : 'Credit Card Bill Payment',
      amount      : 12708.82,
      category    : 'personal',
      icon        : 'credit_card'
    },
    {
      date        : '16/02/2018',
      description : 'Ice Creams @ Aavin',
      amount      : 100,
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
