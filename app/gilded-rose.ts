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
        //for loop, loops through the items array
        for (let i = 0; i < this.items.length; i++) {
            //if the item name is not aged brie and this name is not backstage pass
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                //if item quality is more than 0
                if (this.items[i].quality > 0) {
                    //if item name is not sulfuras
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        //then quality -1
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
                 //if this item is aged brie or backstage pass
            } else {
               //if quality is less than 50
                if (this.items[i].quality < 50) {
                    //quality + 1
                    this.items[i].quality = this.items[i].quality + 1
                    //if name is backstage pass
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        //if sellin is less than 11
                        if (this.items[i].sellIn < 11) {
                            //if quality is less than 50
                            if (this.items[i].quality < 50) {
                                //quality + 1
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        //if selling is less than 6
                        if (this.items[i].sellIn < 6) {
                            //if quality is less than 50
                            if (this.items[i].quality < 50) {
                                //quality + 1
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            //if the name is not sulfuras
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                //sellin -1
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            //if sellIn is less than 0
            if (this.items[i].sellIn < 0) {
                //if name is not aged brie
                if (this.items[i].name != 'Aged Brie') {
                    //if name is not backstage pass
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        //if quality is more than 0
                        if (this.items[i].quality > 0) {
                            //if item name is not sulfuras
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                //then item quality -1
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                        //otherwise if name is backstage pass
                    } else {
                        //quality = 0;
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                //if aged brie
                } else {
                    //if quality is less than 50
                    if (this.items[i].quality < 50) {
                        //quality + 1
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }
        return this.items;
    }
}
