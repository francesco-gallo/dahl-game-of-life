'use strict';

export enum seed {
    empty = 'empty',
    random = 'random',
    oscillators = 'oscillators',
    pulsar = 'pulsar',
    spaceships = 'spaceships'
}

export class WorldData {
    x: number;
    y: number;
    world: boolean[];
}
