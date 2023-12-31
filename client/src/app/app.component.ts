import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asdf';
  backOfCard = '../assets/photos/Gray_back.jpg'
  firstCard = '';
  secondCard = '';

  playerOnePoints = 0;
  playerTwoPoints = 0;

  isPair = false;

  gameCompleted = false;

  turn: 1 | 2 = 1;

  cards: string[] = [
    '../assets/photos/2C1.jpg',
    '../assets/photos/2C2.jpg',
    '../assets/photos/3C1.jpg',
    '../assets/photos/3C2.jpg',
    '../assets/photos/4C1.jpg',
    '../assets/photos/4C2.jpg',
    '../assets/photos/5C1.jpg',
    '../assets/photos/5C2.jpg',
    '../assets/photos/6C1.jpg',
    '../assets/photos/6C2.jpg',
    '../assets/photos/7C1.jpg',
    '../assets/photos/7C2.jpg',
    '../assets/photos/8C1.jpg',
    '../assets/photos/8C2.jpg',
    '../assets/photos/9C1.jpg',
    '../assets/photos/9C2.jpg',
    '../assets/photos/10C1.jpg',
    '../assets/photos/10C2.jpg',
    '../assets/photos/JC1.jpg',
    '../assets/photos/JC2.jpg',
  ];

 constructor(private location: Location) {
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements using destructuring assignment
    }
    return array;
  }
  
  // Usage example
  const shuffledArray = shuffleArray(this.cards);
  console.log(shuffledArray);
 }

  showCard(ind: string) {
    // console.log(ind)
    if (this.firstCard == '') {
      this.firstCard = ind;
    } else if (this.secondCard == '') {
      this.secondCard = ind
      setTimeout(() => {
        this.compareCards();
      }, 500);
    }
  }

  compareCards() {
    console.log(this.firstCard[this.firstCard.length-6])
    console.log(this.secondCard)
    let pairFound = this.firstCard[this.firstCard.length-7] === this.secondCard[this.secondCard.length-7];
    if (pairFound) {
      // alert('Pair Found!')
      this.isPair = true;
      setTimeout(() => {
        this.isPair = false;
      }, 500);
      this.cards.splice(this.cards.indexOf(this.firstCard), 1);
      this.cards.splice(this.cards.indexOf(this.secondCard), 1);
      if (this.turn === 1) {
        this.playerOnePoints++
      } else {
        this.playerTwoPoints++
      }
      if (this.cards.length === 0) {
        this.gameCompleted=true;
      }
    } else {
      // alert('Not a pair!')
    }
    this.firstCard='';
    this.secondCard='';
    this.turn = this.turn === 1 ? 2 : 1;
  }

  refreshPage(): void {
    window.location.reload()
  }

}
