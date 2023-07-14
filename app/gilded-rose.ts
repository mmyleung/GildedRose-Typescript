export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            let typeOfItem = "";

            if (item.name.startsWith("Sulfuras")) {
                typeOfItem = "Sulfuras";
            } else if (item.name.startsWith("Aged")) {
                typeOfItem = "Aged";
            } else if (item.name.startsWith("Backstage passes")) {
                typeOfItem = "Backstage passes";
            } else if (item.name.startsWith("Conjured")) {
                typeOfItem = "Conjured";
            } else {
                typeOfItem = "Common";
            }

            if(typeOfItem === 'Sulfuras') {

            } else {
                item.sellIn --;
                switch (typeOfItem) {

                    case 'Aged':
                        item.quality = item.sellIn < 0 ? item.quality += 2 : item.quality += 1;
                        break;

                    case 'Backstage passes':
                        if (item.sellIn > 10) {
                            item.quality ++;
                        } else if (item.sellIn >5) {
                            item.quality += 2;
                        } else if (item.sellIn > 0) {
                            item.quality += 3;
                        } else if (item.sellIn <= 0){
                            item.quality = 0;
                        }
                        break;

                    case 'Conjured':
                        item.quality = item.sellIn > 0 ? item.quality -= 2 : item.quality -= 4;
                        break;

                    default: 
                        item.quality = item.sellIn > 0 ? item.quality -= 1 : item.quality -= 2;
                }

                if(item.quality > 50) {
                    item.quality = 50;
                } else if (item.quality < 0) {
                    item.quality = 0;
                }
            }
        }
        return this.items;
    }
}
