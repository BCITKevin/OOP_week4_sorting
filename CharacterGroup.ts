import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    data: string;
    constructor(data: string) {
        this.data = data;
    }
    get length():number {
        return this.data.length;
    }
    swap(leftPos: number, rightPos: number): void {
        // if more time, I would do similar with this which is same thing with numberGroups.
        [this.data[leftPos], this.data[rightPos]] = [this.data[rightPos], this.data[leftPos]];
    }
    compare(leftPos: number, rightPos: number): boolean {
        if(this.data[leftPos].charCodeAt < this.data[rightPos].charCodeAt) {
            return true;
        }
        return false;
    }
}