'use strict';

export class Utils {
    // converts bidimensional, possibly-out-of-bounds index to unidimensional correct one
    public static convertIndex(x: number, y: number, xSize: number, ySize = xSize): number {
        x = (x+xSize)%xSize;
        y = (y+ySize)%ySize;
        return x + (y * xSize);
    }
}