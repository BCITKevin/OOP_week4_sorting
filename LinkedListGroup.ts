import { ISortable } from "./ISortable";

class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
      this.data = data;
    }
  }
  
  export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
        let count = 0;
        let node: Node | null = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this.head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }   
  
    compare(leftPos: number, rightPos: number): boolean {
        const left = this.at(leftPos);
        const right = this.at(rightPos);
        return left.data > right.data;
    }
  
    swap(leftPos: number, rightPos: number): void {
        const left = this.at(leftPos);
        const right = this.at(rightPos);
        const temp = left.data;
        left.data = right.data;
        right.data = temp;
    }
  
    print(): void {
      if (!this.head) {
        return;
      }
      let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }