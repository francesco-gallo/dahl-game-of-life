'use strict';

import { seed, WorldData } from "./models";
import { SeedGenerator } from "./seeds";
import { Utils } from "./utils";

export { GameService };
class GameService {
    private static getOscillators(): WorldData {
        const size = 15;
        const indexes = SeedGenerator.getOscillators(size);
        const world = Array.from(Array(size*size)).map(_ => false);
        indexes.forEach(index => {
            world[index] = true;
        });
        return {x: size, y: size, world}
    }

    private static getPulsar(): WorldData {
        const size = 17;
        const indexes = SeedGenerator.getPulsar(size);
        const world = Array.from(Array(size*size)).map(_ => false);
        indexes.forEach(index => {
            world[index] = true;
        });

        return {x: size, y: size, world}
    }

    private static getSpaceship(): WorldData {
        const size = 9;
        const indexes = SeedGenerator.getSpaceship(size);
        const world = Array.from(Array(size*size)).map(_ => false);
        indexes.forEach(index => {
            world[index] = true;
        });

        return {x: size, y: size, world}
    }

    public static generate(x: number, y: number, type: seed): WorldData {
        if(x<=0 || y<=0) {
            throw new Error('Invalid x/y sizes');
        }

        let data: WorldData = {x, y, world: []};
        switch (type) {
            case seed.empty: {
                data.world = Array.from(Array(x*y)).map(() => false);
                break;
            }
            case seed.random: {
                data.world = Array<boolean>(x*y);
                for (let i = 0; i<data.world.length; ++i) {
                    data.world[i] = Math.random()>0.5;
                }
                break;
            }
            case seed.oscillators: {
                data = GameService.getOscillators();
                break;
            }
            case seed.pulsar: {
                data = GameService.getPulsar();
                break;
            }
            case seed.spaceships: {
                data = GameService.getSpaceship();
                break;
            }
        }

        return data;
    }

    public static tick(xSize: number, ySize: number, world: boolean[]): boolean[] {
        // Excluding invalid inputs
        if(xSize<=0 || ySize<=0) {
            throw new Error('Invalid x/y sizes');
        }

        if (xSize*ySize !== world.length) {
            throw new Error('x/y sizes don\'t match the world');
        }

        // The births and deaths occur simultaneously; we must clone the input to avoid same-tick-interferences.
        const newWorld: boolean[] = Array.from(Array(world.length));

        let currentIndex = 0;
        for (let y = 0; y < ySize; ++y) {
            for (let x = 0; x < xSize; ++x) {
                // for each cell, fetch it's neighborhood
                const neighbors: boolean[] = [
                    world[Utils.convertIndex(x-1, y-1, xSize, ySize)],
                    world[Utils.convertIndex(x, y-1, xSize, ySize)],
                    world[Utils.convertIndex(x+1, y-1, xSize, ySize)],
                    world[Utils.convertIndex(x-1, y, xSize, ySize)],
                    world[Utils.convertIndex(x+1, y, xSize, ySize)],
                    world[Utils.convertIndex(x-1, y+1, xSize, ySize)],
                    world[Utils.convertIndex(x, y+1, xSize, ySize)],
                    world[Utils.convertIndex(x+1, y+1, xSize, ySize)],
                ];

                // returns true values count
                const livingsCount = neighbors.filter(Boolean).length;

                // living or dead cells needs 3, but livings cells suffice 2 too,
                newWorld[currentIndex] = (livingsCount === 3 || world[currentIndex] && livingsCount === 2)
                ++currentIndex;
            }
        }

        return newWorld;
    }
}
