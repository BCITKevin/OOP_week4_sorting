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
        if(true) {
            [leftPos, rightPos] = [rightPos, leftPos];
        }
    }
    compare(leftPos: number, rightPos: number): boolean {
        if(this.data[leftPos].charCodeAt < this.data[rightPos].charCodeAt) {
            return true;
        }
        return false;
    }
}