// ============================================
// Array Methods — Advanced (ES2024+)
// ============================================

const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// -----------------------------------------
// Arrays Combine Karna
// -----------------------------------------

// push — array ko element ki tarah add karta hai (nested ho jaata hai)
// marvelHeroes.push(dcHeroes); // ["thor", "Ironman", "spiderman", ["superman",...]]

// concat — arrays merge karta hai (naya array return karta hai)
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log("concat:", allHeroes);

// Spread operator — modern aur preferred tarika
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log("spread:", allNewHeroes);

// -----------------------------------------
// Nested Arrays Ko Flat Karna
// -----------------------------------------

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatArray = anotherArray.flat(Infinity); // Saare levels flat karo
console.log("\nFlattened:", flatArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// -----------------------------------------
// Array Static Methods
// -----------------------------------------

console.log("\n--- Static Methods ---");
console.log("Array.isArray('DEEPAK'):", Array.isArray("DEEPAK")); // false
console.log("Array.isArray([1,2]):", Array.isArray([1, 2]));      // true

// Array.from() — iterable se array banao
console.log("Array.from('DEEPAK'):", Array.from("DEEPAK")); // ["D","E","E","P","A","K"]
console.log("Array.from({name: 'DEEPAK'}):", Array.from({ name: "DEEPAK" })); // [] — plain objects ko entries chahiye!

// Object ko array me convert karne ke liye Object.entries() use karo:
console.log("Object.entries:", Object.entries({ name: "DEEPAK" })); // [["name","DEEPAK"]]

// Array.of() — arguments se array banao
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log("Array.of:", Array.of(score1, score2, score3)); // [100, 200, 300]

// -----------------------------------------
// Deep Copy with structuredClone() (ES2022)
// -----------------------------------------

console.log("\n--- Deep Copy ---");
const nestedArr = [[1, 2], [3, 4], { a: 5 }];

// Shallow copy — nested arrays/objects shared references hain
const shallowCopy = [...nestedArr];
shallowCopy[0].push(99);
console.log("Original after shallow:", nestedArr[0]); // [1, 2, 99] — modify ho gaya!

// Deep copy — poora independent
const deepCopy = structuredClone([[1, 2], [3, 4], { a: 5 }]);
deepCopy[0].push(88);
console.log("Deep copy:", deepCopy[0]);  // [1, 2, 88]

// -----------------------------------------
// Set — Sirf Unique Values (ES2015)
// -----------------------------------------

console.log("\n--- Remove Duplicates ---");
const withDupes = [1, 2, 3, 2, 4, 3, 5];
const unique = [...new Set(withDupes)];
console.log("Unique:", unique); // [1, 2, 3, 4, 5]