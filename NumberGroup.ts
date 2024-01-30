import { ISortable } from "./ISortable";
// Q. get length 필요성
export class NumberGroup implements ISortable {
    data: number[];
    constructor(data: number[]) {
        this.data = data;
    }
    get length(): number{
        return this.data.length;
    }
    swap(leftPos: number, rightPos: number): void {
        const temp = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = temp;
    }

    // this.data = [1, 2, 10, 9]
    compare(leftPos: number, rightPos: number): boolean {
        if(this.data[leftPos] > this.data[rightPos]) {
            return true;
        }
        return false;
    }
}