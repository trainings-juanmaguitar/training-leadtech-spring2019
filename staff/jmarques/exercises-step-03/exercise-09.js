// 9 -- Randomizes two numbers and prints the smallest number that is greater than one,
//      such that both numbers are divided by it with no remainder.
//      For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
function randomLeastCommon() {
    var numList = [];
    [0, 1].forEach(function () {
        var numRandom = Math.floor(Math.random() * (10 - 1)) + 1;
        numList.push(numRandom);
    });

    var arr1 = arrPopulate(numList[0]);
    var arr2 = arrPopulate(numList[1]);
    var arrResult = [];
    var result = {};

    arr1.forEach(function (el) {
        arr2.forEach(function (self) {
            if (el == self) {
                arrResult.push(el);
            }
        });
    });

    result = {
        numRandom1: numList[0],
        numRandom2: numList[1],
        arr1: arr1,
        arr2: arr2,
        result: arrResult
    }
    return result;
}
function arrPopulate(num) {
    mainArr = [];
    for (var i = num; i <= 100; i++) {
        mainArr.push(i);
        i = i + (num - 1);
    }
    return mainArr
}
randomLeastCommon();