import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it("should decrease by 1 in sellIn", function() {
        const gildedRose = new GildedRose([ new Item('foo', 5, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    });

    it("should not decrease in sellIn if name is sulfuras", function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });

    // it("should decrease by 1 in quality", function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 5, 1) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).to.equal(0);
    // });

    // it("should decrease by 1 in quality if quality is more than 1", function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 5, 1) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).to.equal(0);
    // });

    // it("should not change in quality once it reaches 0", function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 5, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).to.equal(0);
    // });
    // it("should (aged brie) increase by 1 in quality if quality is less than 50", function() {
    //     const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 1) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).to.equal(0);
    // });




    it("should match golden record", function() {
        const gildedRose = new GildedRose(
            [
                new Item('foo', 0, 0),
                new Item('foo', 15, 40),
                new Item('foo', -2, 30),
                new Item('foo', -3, 0),
                new Item('Aged Brie', 0, 20),
                new Item('Aged Brie', -5, 50),
                new Item('Aged Brie', -1, 0),
                new Item('Aged Brie', 10, 20),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 20, 5),
                new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50),
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5),
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25),
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5),
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
                new Item('Backstage passes to a TAFKAL80ETC concert', -2, 50),
            ])
        
        const goldenRecord = [
            new Item('foo', -1, 0),
            new Item('foo', 14, 39),
            new Item('foo', -3, 28),
            new Item('foo', -4, 0),
            new Item('Aged Brie', -1, 22),
            new Item('Aged Brie', -6, 50),
            new Item('Aged Brie', -2, 2),
            new Item('Aged Brie', 9, 21),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 6),
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 7),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 27),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 8),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 33),
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
        ];
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(goldenRecord);
    })



});
