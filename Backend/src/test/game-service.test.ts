import { GameService } from "../game-service";

const world1 = [true];
const world2 = [false,true,true,true,false,false,false,false,false,false,true,false,true,false,true,false,false,true,true,true,false,true,false,false,false];
const world3 = [false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

test('Single cell', () => {
    expect(GameService.tick(1, 1, world1)).toStrictEqual(
        [false]
    );
});

test('Random world 5x5', () => {
    expect(GameService.tick(5, 5, world2)).toStrictEqual(
        [false,true,true,false,false,true,false,false,false,true,true,true,true,false,true,false,false,true,false,true,true,true,false,false,true]
    );
});

test('Spaceship', () => {
    expect(GameService.tick(9, 9, world3)).toStrictEqual(
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,true,true,true,true,false,true,false,false,false,true,true,true,true,true,true,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    );
});
