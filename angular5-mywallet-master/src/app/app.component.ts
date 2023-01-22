import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Wallet';

  constructor() {
  }

  public ngOnInit()
  {
    /*--------------------
    Projects :  myWallet
    UI Developers : Mugeshkumar Devaraj
    ---------------------*/
    $(document).ready(function()
    {	
      /*--------------// main_container Height //-------------*/
      var actualHeight = $(window).height();
      var headerHeight = $('header').outerHeight();
      $('.main_container').css({
          "min-height" : actualHeight
      });
      
      /*--------------// tabs //-------------*/
      $('.tabs li a').click(function() {
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
      });
    });

    $(window).resize(function(){
      /*--------------// main_container Height //-------------*/
      var actualHeight = $(window).height();
      var headerHeight = $('header').outerHeight();
      $('.main_container').css({
          "min-height" : actualHeight
      });
    });
  }
}
