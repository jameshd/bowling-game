import Game from "./game";

describe("Bowling Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("gutter balls score 0", () => {
    game.roll(0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0)
    expect(game.calcScore()).toEqual(0);
  });

  test("can roll all ones", () => {
    game.roll(1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1)
    expect(game.calcScore()).toEqual(20);
  });

  test("can score a spare followed by a three", () => {
    game.roll(5,5, 3,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0);

    expect(game.calcScore()).toEqual(16);
  });

  test('perfect game', () => {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10);

    expect(game.calcScore()).toEqual(300);
  });
});
