import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";
import { ISortable } from "./ISortable";

class SortUtil {
    collection: ISortable

    constructor(collection: ISortable) {
      this.collection = collection;
    }
  // [5, 1, 6, 2]
    sort(): void {
      let isSorted = false;
      let lastUnsorted = this.collection.length - 1;
      while (!isSorted) { 
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
         if(this.collection.compare(i, i + 1)) {
          this.collection.swap(i, i + 1);
         }
        }
        lastUnsorted--;
      }
    }
  }

  const numberGroup = new NumberGroup([10, 3, -5, 0]);
  const sortUtil = new SortUtil(numberGroup);
  sortUtil.sort()
  console.log(numberGroup);