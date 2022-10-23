import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  squares: any = [];
  winner = '';
  counter = 0;
  isDraw = false;
  isXNext = true;
  freshPage = true;

  constructor() { }

  ngOnInit(): void {

  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.counter = 0;
    this.isDraw = false;
    this.counter = 0;
    this.freshPage = false;
  }

  get player() {
    return this.isXNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      // if the Square is empty then only do operation that's allow us to put XO
      this.squares.splice(idx, 1, this.player);
      this.isXNext = !this.isXNext;
      this.counter++;
    }
    this.winner = this.calculateWinner();

    if (!this.winner && this.counter == 9) {
      this.isDraw = true;
    }
  }

  calculateWinner() {
    // 0 1 2
    // 3 4 5
    // 6 7 8

    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
