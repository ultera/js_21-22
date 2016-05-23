"use strict";

var iqtest = {
			prepareTestData: function prepareTestData() {
						/** sourceTest.weight[i] - 0, if sourceTest.answers[i] is incorrect;
      /*                       - 1, if sourceTest.answers[i] is correct.*/

						var sourceTest = [{ number: 0,
									question: "Which one of the five is least like the other four?",
									answers: ["Dog", "Mouse", "Lion", "Snake", "Elephant", "I'm not sure"],
									weight: [0, 0, 0, 1, 0, 1] }, { number: 1,
									question: "Which number should come next in the series?",
									answers: [8, 13, 21, 26, 31, "I'm not sure"],
									weight: [0, 0, 1, 0, 0, 1] }, { number: 2,
									question: "Which one of the five choices makes the best comparison?",
									answers: [25641, 26451, 12654, 51462, 15264, "I'm not sure"],
									weight: [0, 0, 0, 0, 1, 1] }, { number: 3,
									question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
									answers: [20, 24, 25, 26, 28, "I'm not sure"],
									weight: [0, 1, 0, 0, 0, 1] }, { number: 4,
									question: "Which one of the numbers does not belong in the following series?",
									answers: ["THREE", "SEVEN", "EIGHT", "FIFTEEN", "THIRTY", "I'm not sure"],
									weight: [0, 0, 1, 0, 0, 1] }, { number: 5,
									question: "Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:",
									answers: ["Twig", "Tree", "Branch", "Blossom", "Bark", "I'm not sure"],
									weight: [1, 0, 0, 0, 0, 1] }, { number: 6,
									question: "If you rearrange the letters 'CIFAIPC' you would have the name of a(n):",
									answers: ["City", "Animal", "Ocean", "River", "Country", "I'm not sure"],
									weight: [0, 0, 1, 0, 0, 1] }];

						return sourceTest;
			},

			countResult: function countResult(sourceTest, userWeight) {
						var userResult = 0;

						for (var i = 0; i < sourceTest.length; i++) {
									if (userWeight[i].weight.join() == sourceTest[i].weight.join()) userResult++;
						}

						return userResult;
			},

			getObjectLength: function getObjectLength(obj) {
						return obj.length;
			}
};

try {
			module.exports = iqtest;
} catch (e) {}
