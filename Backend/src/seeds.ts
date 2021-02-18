'use strict';

import { Utils } from "./utils";

export class SeedGenerator {

    public static getOscillators(size: number): number[] {
        return [
            Utils.convertIndex(1,2,size),
            Utils.convertIndex(2,2,size),
            Utils.convertIndex(3,2,size),
            Utils.convertIndex(5,7,size),
            Utils.convertIndex(6,7,size),
            Utils.convertIndex(7,7,size),
            Utils.convertIndex(6,6,size),
            Utils.convertIndex(7,6,size),
            Utils.convertIndex(8,6,size),
            Utils.convertIndex(10,10,size),
            Utils.convertIndex(11,10,size),
            Utils.convertIndex(10,11,size),
            Utils.convertIndex(13,12,size),
            Utils.convertIndex(13,13,size),
            Utils.convertIndex(12,13,size),
        ];
    }

    public static getPulsar(size: number): number[] {
        return [
            Utils.convertIndex(4,2,size),
            Utils.convertIndex(5,2,size),
            Utils.convertIndex(6,2,size),
            Utils.convertIndex(10,2,size),
            Utils.convertIndex(11,2,size),
            Utils.convertIndex(12,2,size),
            Utils.convertIndex(2,4,size),
            Utils.convertIndex(2,5,size),
            Utils.convertIndex(2,6,size),
            Utils.convertIndex(7,4,size),
            Utils.convertIndex(7,5,size),
            Utils.convertIndex(7,6,size),
            Utils.convertIndex(9,4,size),
            Utils.convertIndex(9,5,size),
            Utils.convertIndex(9,6,size),
            Utils.convertIndex(14,4,size),
            Utils.convertIndex(14,5,size),
            Utils.convertIndex(14,6,size),
            Utils.convertIndex(4,7,size),
            Utils.convertIndex(5,7,size),
            Utils.convertIndex(6,7,size),
            Utils.convertIndex(10,7,size),
            Utils.convertIndex(11,7,size),
            Utils.convertIndex(12,7,size),
            Utils.convertIndex(4,9,size),
            Utils.convertIndex(5,9,size),
            Utils.convertIndex(6,9,size),
            Utils.convertIndex(10,9,size),
            Utils.convertIndex(11,9,size),
            Utils.convertIndex(12,9,size),
            Utils.convertIndex(2,10,size),
            Utils.convertIndex(2,11,size),
            Utils.convertIndex(2,12,size),
            Utils.convertIndex(7,10,size),
            Utils.convertIndex(7,11,size),
            Utils.convertIndex(7,12,size),
            Utils.convertIndex(4,14,size),
            Utils.convertIndex(5,14,size),
            Utils.convertIndex(6,14,size),
            Utils.convertIndex(10,14,size),
            Utils.convertIndex(11,14,size),
            Utils.convertIndex(12,14,size),
            Utils.convertIndex(9,10,size),
            Utils.convertIndex(9,11,size),
            Utils.convertIndex(9,12,size),
            Utils.convertIndex(14,10,size),
            Utils.convertIndex(14,11,size),
            Utils.convertIndex(14,12,size)
        ]
    }

    public static getSpaceship(size: number): number[] {
        return [
            Utils.convertIndex(4,1,size),
            Utils.convertIndex(5,1,size),
            Utils.convertIndex(2,2,size),
            Utils.convertIndex(7,2,size),
            Utils.convertIndex(8,3,size),
            Utils.convertIndex(8,4,size),
            Utils.convertIndex(2,4,size),
            Utils.convertIndex(3,5,size),
            Utils.convertIndex(4,5,size),
            Utils.convertIndex(5,5,size),
            Utils.convertIndex(6,5,size),
            Utils.convertIndex(7,5,size),
            Utils.convertIndex(8,5,size),
        ]
    }
}
