import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

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
