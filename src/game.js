export default class Game {
  constructor() {
    this.scores = [];
  }

  roll(...pinsDown) {
    this.scores = pinsDown;
  }

  calcScore() {
    let score = 0;
    let cursor = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(cursor)) {
        score += 10 + this.scores[cursor + 1] + this.scores[cursor + 2];
      } else if (this.isSpare(cursor)) {
        score += 10 + this.scores[cursor + 2];
        cursor += 2;
      } else {
        score += this.scores[cursor] + this.scores[cursor + 1];
        cursor += 2;
      }
    }
    return score;
  }

  isStrike(cursor) {
    return this.scores[cursor] === 10;
  }

  isSpare(cursor) {
    return this.scores[cursor] + this.scores[cursor + 1] === 10;
  }
}
