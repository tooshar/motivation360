import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { Content } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  randomQuoteArray: any;
  author: any;
  quoteContent: any;
  inc: number = 0;
  hitsArray = [];

  constructor(public navCtrl: NavController, private quotesService: QuotesProvider) {
    this.fetchQuotes(this.inc);
  }
  ngAfterViewInit() {
    this.content.ionScroll.subscribe((event) => {
      console.log('scrolling ', event);
      if (event.scrollTop >= event.scrollHeight / 8) {
        this.fetchQuotes(++this.inc);
      }
    });
  }

  fetchQuotes(inc) {
    for (let i = inc; i < inc + 10; i++) {

      this.hitsArray.push(
      this.quotesService.getQuotes()
        .then(data => {
          console.log(data);

          this.randomQuoteArray = JSON.parse(data['_body']);

          console.log("subscribed data >>>>>", data)
          console.log("subscribed data._body >>>>>", this.randomQuoteArray[0]['content'])
          this.quoteContent = this.randomQuoteArray[0]['content'];
          console.log('::::::::',this.quoteContent)
          var d = "eww-" + i;
          let s = document.getElementById(d);
          s.innerHTML = this.quoteContent;
          console.log('::::::::',this.quoteContent)
          this.quoteContent = s;
          console.log(';;;;;;',this.quoteContent)


          this.author = this.randomQuoteArray[0]['title'];
          console.log("LLLLLLLLLLLLLLLL", this.quoteContent);
          var g = "feww-" + i;
          let f = document.getElementById(g);
          f.innerHTML = this.author;
          this.author = f;

        })
        .catch(err => {
          console.log(err);
        }));
    }

  }

  ionViewDidEnter() {

  }


}
