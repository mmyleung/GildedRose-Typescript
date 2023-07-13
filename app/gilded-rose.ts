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

        const items = this.items;
        //for loop, loops through the items array
        for (let i = 0; i < this.items.length; i++) {
            const name = this.items[i].name;
            switch (name) {
                //if sulfuras then set quality to 80, sellIn to 0
                case 'Sulfuras, Hand of Ragnaros':
                    this.items[i].sellIn = 0;
                    this.items[i].quality = 80;
                    break;
                //if aged brie
                case 'Aged Brie':
                    //decrease sellIn by 1
                    this.items[i].sellIn --;
                    //if sellIn is less than 0, quality increases by 2 else by 1
                    this.items[i].quality = this.items[i].sellIn < 0 ? this.items[i].quality += 2 : this.items[i].quality += 1;
                    //if quality is less than 50 then quality ++, else quality = 50;
                    if (this.items[i].quality > 50) {
                        this.items[i].quality = 50;
                    }
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (this.items[i].sellIn > 10) {
                        this.items[i].quality ++;
                    } else if (this.items[i].sellIn <=10 && this.items[i].sellIn >5) {
                        this.items[i].quality += 2;
                    } else if (this.items[i].sellIn <=5 && this.items[i].sellIn > 0) {
                        this.items[i].quality += 3;
                    } else if (this.items[i].sellIn <= 0){
                        this.items[i].quality = 0;
                    }
                    //if quality is less than 50 then quality is the same, else quality = 50;
                    this.items[i].quality = this.items[i].quality < 50 ? this.items[i].quality: 50;
                    //decrease sellIn by 1
                    this.items[i].sellIn --;
                    break;
                //if conjured
                case 'Conjured Mana Cake':
                    //if sellIn is more than 0, decrease quality by 2 else by 4
                    this.items[i].quality = this.items[i].sellIn > 0 ? this.items[i].quality -= 2 : this.items[i].quality -= 4;
                    //if quality is less than 0, set quality to 0;
                    if (this.items[i].quality < 0) {
                        this.items[i].quality = 0;
                    }
                    //decrease sellIn by 1
                    this.items[i].sellIn --;  
                    break;
                default: 
                    //if sellIn is more than 0, decrease quality by 1 else by 2
                    this.items[i].quality = this.items[i].sellIn > 0 ? this.items[i].quality -= 1 : this.items[i].quality -= 2;
                    //if quality is less than 0, set quality to 0;
                    if (this.items[i].quality < 0) {
                        this.items[i].quality = 0;
                    }
                    this.items[i].sellIn --;


            }
            // //if the item name is not aged brie and this name is not backstage pass
            // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //     //if item quality is more than 0
            //     if (this.items[i].quality > 0) {
            //         //if item name is not sulfuras
            //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //             //then quality -1
            //             this.items[i].quality = this.items[i].quality - 1
            //         }
            //     }
            // //if this item is aged brie or backstage pass
            // } else {
            //    //if quality is less than 50
            //     if (this.items[i].quality < 50) {
            //         //quality + 1
            //         this.items[i].quality = this.items[i].quality + 1
            //         //if name is backstage pass
            //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            //             //if sellin is less than 11
            //             if (this.items[i].sellIn < 11) {
            //                 //if quality is less than 50
            //                 if (this.items[i].quality < 50) {
            //                     //quality + 1
            //                     this.items[i].quality = this.items[i].quality + 1
            //                 }
            //             }
            //             //if selling is less than 6
            //             if (this.items[i].sellIn < 6) {
            //                 //if quality is less than 50
            //                 if (this.items[i].quality < 50) {
            //                     //quality + 1
            //                     this.items[i].quality = this.items[i].quality + 1
            //                 }
            //             }
            //         }
            //     }
            // }
            // //if the name is not sulfuras
            // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //     //sellin -1
            //     this.items[i].sellIn --;
            // }
            // //if sellIn is less than 0
            // if (this.items[i].sellIn < 0) {
            //     //if name is not aged brie
            //     if (this.items[i].name != 'Aged Brie') {
            //         //if name is not backstage pass
            //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //             //if quality is more than 0
            //             if (this.items[i].quality > 0) {
            //                 //if item name is not sulfuras
            //                 if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //                     //then item quality -1
            //                     this.items[i].quality = this.items[i].quality - 1
            //                 }
            //             }
            //             //otherwise if name is backstage pass
            //         } else {
            //             //quality = 0;
            //             this.items[i].quality = this.items[i].quality - this.items[i].quality
            //         }
            //     //if aged brie
            //     } else {
            //         //if quality is less than 50
            //         if (this.items[i].quality < 50) {
            //             //quality + 1
            //             this.items[i].quality = this.items[i].quality + 1
            //         }
            //     }
            // }
        }
        return this.items;
    }
}
