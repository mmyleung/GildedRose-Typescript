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
                let qualityMultiplier = 0;
                switch (typeOfItem) {

                    case 'Aged':
                        qualityMultiplier = -1;
                        item.quality = this.changeQuality (item.sellIn, item.quality, qualityMultiplier)
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
                        qualityMultiplier = 2;
                        item.quality = this.changeQuality (item.sellIn, item.quality, qualityMultiplier)
                        break;

                    default: 
                        qualityMultiplier = 1;
                        item.quality = this.changeQuality (item.sellIn, item.quality, qualityMultiplier)
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

    changeQuality (sellIn, quality, multiplier) {
        return quality = sellIn > 0 ? quality -= 1 * multiplier : quality -= 2 * multiplier;

    }
}
