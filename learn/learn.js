var _ = require("../underscore");

const numArray = [2, 3, 4];
const numObj = { two: 2, three: 3, four: 4 };
let result;

// Collections

// each alias forEach
_.each(numArray, function (num, i) {
  console.log("array each", num, i);
});

_.each(numObj, (value, key) => {
  // 注意这里 key value 的顺序
  console.log("obj each", key, value);
});

// map
// map返回array mapObject返回obj
// 注意mapObject会保留key，通过iterate构造新value
result = _.map(numArray, (num, i) => {
  console.log(`array map num:${num} i:${i}`);
  return num * i;
});
console.log(`array map result:${result}`);

result = _.mapObject(numArray, (num, i) => {
  console.log(`array mapObject num:${num} i:${i}`);
  return num * i;
});
console.log(`array mapObject result:${JSON.stringify(result)}`);

result = _.map(numObj, (value, key) => {
  console.log(`obj map key:${key} value:${value}`);
  return value;
});
console.log(`obj map result:${JSON.stringify(result)}`);

result = _.mapObject(numObj, (value, key) => {
  console.log(`obj map key:${key} value:${value}`);
  return value * 10;
});
console.log(`obj mapObject result:${JSON.stringify(result)}`);

// _.reduce(list, (previousValue, currentValue, currentIndex) => {}, initialValue)
result = _.reduce(
  numArray,
  (previousValue, currentValue, currentIndex) => {
    console.log(
      `array reduce previousValue:${previousValue} currentValue:${currentValue} currentIndex:${currentIndex}`
    );
    return previousValue * currentValue;
  },
  10
);
console.log(`array reduce result:${result}`);

// reduceRight
var list = [
  [0, 1],
  [2, 3],
  [4, 5],
];
result = _.reduceRight(numArray, function (a, b) {
  console.log(`array reduceRight a:${a} b:${b}`);
  return (a + "").concat(b);
});
console.log(`array reduceRight result:${result}`);

result = _.reduceRight(numObj, function (a, b) {
  console.log(`array reduceRight a:${a} b:${b}`);
  return (a + "").concat(b);
});
console.log(`object reduceRight result:${result}`);

result = _.reduceRight(list, function (a, b) {
  console.log(`list reduceRight a:${a} b:${b}`);
  return a.concat(b);
});
console.log(`list reduceRight result:${result}`);

// find 
// 注意是返回第一个predicate=true的元素值
// 找不到返回undefined
// 注意：对象调用是针对value
result = _.find(numArray, (value, index, obj) => {
    console.log(`array find value:${value} index:${index} obj:${obj}`)
    return index%2 === 0
})
console.log(`array find result:${result}`)

result = _.find(numObj, (value, key, obj) => {
    console.log(`object find value:${value} key:${key} obj:${obj}`)
    return value%2 === 0
})
console.log(`object find result:${result}`)

// filter
// 注意：对象调用是针对value
// reject 与filter相反
result = _.filter(numArray, (value, index, obj) => {
    console.log(`array filter value:${value} index:${index} obj:${obj}`)
    return index%2 === 0
})
console.log(`array filter result:${result}`)

result = _.filter(numObj, (value, key, obj) => {
    console.log(`object filter value:${value} key:${key} obj:${obj}`)
    return value%2 === 0
})
console.log(`object filter result:${result}`)

// where
// 返回数组， 数组包含的元素包含properties列出的所有键值对
function where() {
    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    var result = _.where(list, {a: 1});
    // assert.strictEqual(result.length, 3);
    // assert.strictEqual(result[result.length - 1].b, 4);
    result = _.where(list, {b: 2});
    // assert.strictEqual(result.length, 2);
    // assert.strictEqual(result[0].a, 1);
    result = _.where(list, {});
    // assert.strictEqual(result.length, list.length);
}
where()

// findWhere
// find 和 where 的结合。返回匹配properties的第一个元素
function findWhere() {
    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}, {a: 2, b: 4}];
    var result = _.findWhere(list, {a: 1});
    // assert.deepEqual(result, {a: 1, b: 2});
    result = _.findWhere(list, {b: 4});
    // assert.deepEqual(result, {a: 1, b: 4});

    result = _.findWhere(list, {c: 1});
    // assert.ok(_.isUndefined(result), 'undefined when not found');

    result = _.findWhere([], {c: 1});
    // assert.ok(_.isUndefined(result), 'undefined when searching empty list');
}
findWhere()

// every alias all
function every() {
    // _.identity 就是 return value
    var result = _.every([true, 1, null, 'yes'], _.identity);
    // => false
}
every()

// some alias any
function some() {
    // "yes" 为true
    var result = _.some([null, 0, 'yes', false]);
    // => true 
}
some()

function contains() {
    var result = _.contains(numArray, 3)
}
contains()

function invoke() {
    var result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
    var result2 = _.invoke([[5, 1, 7], [3, 2, 1]], 'pop');
}
invoke()

function pluck() {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    var result = _.pluck(stooges, 'name');
}
pluck()

// max min
// 如果list为空，将返回-Infinity，所以你可能需要事先用isEmpty检查 list 。
function max() {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    var result = _.max(stooges, function(stooge){ return stooge.age; });
    var result2 = _.max([], function(stooge){ return stooge.age; });
}
max()

function sortBy() {
    
}



