var iqtest = require("../js/iqtest.js");

	var userWeight = [
	    {number: 0, weight: [0, 0, 0, 1, 0, 1]},
	    {number: 1, weight: [0, 0, 1, 0, 0, 1]},
	    {number: 2, weight: [0, 0, 0, 0, 1, 1]},
	    {number: 3, weight: [0, 1, 0, 0, 0, 1]},
	    {number: 4, weight: [0, 0, 1, 0, 0, 1]},
	    {number: 5, weight: [1, 0, 0, 0, 0, 1]},
	    {number: 6, weight: [0, 0, 1, 0, 0, 1]}
	];


describe("iqtest", function() {
  it("prepareTestData()", function() {
    //prepare
    var result;

    //act
    result = iqtest.prepareTestData();

    //assert
    expect(result).toBeDefined();
  });

  it("countResult()", function() {
    //prepare
    var result;

    //act
    result = iqtest.countResult(iqtest.prepareTestData(), userWeight);

    //assert
    expect(result).toEqual(7);
  });

  it("getObjectLength()", function() {
    //prepare
    var result;

    //act
    result = iqtest.getObjectLength(userWeight[5].weight);

    //assert
    expect(result).toBe(6);
  });
});
