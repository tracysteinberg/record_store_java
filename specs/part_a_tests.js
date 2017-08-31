var assert = require('assert')
var Record = require('../record.js')
var RecordStore = require('../record_store.js')

describe('part_a', function () {

  var record;
  var recordStore;

  beforeEach(function()  {
  record1 = new Record("The Beatles", "Help!", "Rock", 100);
  recordStore = new RecordStore("Stu's Records", "Edinburgh");
  });

   it("should make sure properties are set for record", function() {
    assert.strictEqual(record1.artist, "The Beatles");
    assert.strictEqual(record1.title, "Help!");
    assert.strictEqual(record1.genre, "Rock");
    assert.strictEqual(record1.price, 100);
  });

   it("should make sure properties are set for recordStore", function() {
     assert.strictEqual(recordStore.name, "Stu's Records");
     assert.strictEqual(recordStore.city, "Edinburgh");
     assert.deepStrictEqual(recordStore.inventory, []);
     assert.strictEqual(recordStore.balance, 0)
  });

   it("should make sure that we can add balance to recordStore", function() {
     recordStore.addToBalance(1000)
     assert.strictEqual(recordStore.balance, 1000);
   });

  it("should make sure that we can add record to recordStore", function() {
    recordStore.addToInventory(record1)
    assert.deepStrictEqual(recordStore.inventory, [record1]);
  });

});



