function doCalculation(a: number, b: number, c: number) {
    return (a * b) + c;
}

let result = doCalculation(2, 3, 1);
console.log(`doCalculation(): ${result}`);

var complexType1 = {name: "myName", id: 1};
complexType1 = {id: 2, name: "anotherName"};

var complexObject = {
    id: 2,
    name: 'testObject'
}
console.log(`complexObject = ${JSON.stringify(complexObject)}`);

var arrayOfNumbers: number [] = [1, 2, 3];
arrayOfNumbers = [3, 4, 5, 6, 7, 8, 9];
console.log(`arrayOfNumbers: ${arrayOfNumbers}`);
// arrayOfNumbers = ["1", "2", "3"];

var arrayOfStrings: string[] = ["first", "second", "third"];
for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log(`arrayOfStrings[${i}] = ${arrayOfStrings[i]}`);
}

for (var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log(`arrayOfStrings[${itemKey}] = ${itemValue}`);
}

for (var arrayItem of arrayOfStrings) {
    console.log(`arrayItem = ${arrayItem}`);
}

var item1 = <any>{id: 1, name: "item 1"};
item1 = {id: 2};

enum DoorState {
    Open = 4,
    Closed,
    Ajar = 10
}

var openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is : ${closedDoor}`);

const enum DoorStateConst {
    Open,
    Closed,
    Ajar
}

var constDoorOpen = DoorStateConst.Open;
console.log(`constDoorOpen is : ${constDoorOpen}`);

enum DoorStateString {
    Open = "open",
    Closed = "closed",
    Ajar = "ajar"
}

var openDoorString = DoorStateString.Open;
console.log(`openDoorString = ${openDoorString}`);

let globalString: string;
setGlobalString();
console.log(`globalString : ${globalString!}`);

function setGlobalString() {
    globalString = "this has been set";
}

let normalObject = {
    id: 1,
    name: "test"
}
let stringObject = {
    "testProperty": 1,
    "anotherProperty": "this is a string"
}

let oneMillion = 100_0_000;
console.log(`oneMillion = ${oneMillion}`);

let limeGreenColor = 0x00_FF_00;
console.log(`limeGreenColor = ${limeGreenColor}`);

function addNumbers(a: number, b: number): string {
    return (a + b).toString();
}

var addResult = addNumbers(2, 3);
console.log(`addNumbers returned : ${addResult}`);


var addVar = function (a: number, b: number): number {
    return a + b;
}

var addVarResult = addVar(2, 3);
console.log("addVarResult:" + addVarResult);


function concatStrings(a: string, b: string = "b", c: string = "c") {
    return a + b + c;
}

var concat3strings = concatStrings("a", "b", "c");
console.log(`concat3strings : ${concat3strings}`);
var concat2strings = concatStrings("a", "b");
console.log(`concat2strings : ${concat2strings}`);
var concat1string = concatStrings("a");
console.log(`concat1strings : ${concat1string}`);


function testArguments(...argArray: number[]) {
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argument[" + i + "] = " + argArray[i]);
        }
    }
}

testArguments(1, 2, 3);


function callbackFunction(text: string) {
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithCallback(
    initialText: string,
    callback: (aa: string) => void) {
    console.log(`inside doSomethingWithCallback ${initialText}`);
    callback(initialText);
}

doSomethingWithCallback("myText", callbackFunction);

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(`add(1,1)= ${add(1, 1)}`);
console.log(`add("1","1")= ${add("1", "1")}`);
// console.log(`add("1","1")= ${add(1,"1")}`);

try {
    console.log(`1. attempting to parse JSON`);
    JSON.parse(`abcd=234`);
} catch (error) {
    console.log(`2. try catch error : ${error}`);
} finally {
    console.log(`3. finally`);
}

var unionType: string | number;
unionType = 1;
console.log(`unionType : ${unionType}`);
unionType = "test";
console.log(`unionType : ${unionType}`);


// function addWithUnion(arg1: string | number, arg2: string | number) {
//     return arg1 + arg2;
// }

function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
): string | number {
    if (typeof arg1 === "string") {
// в рамках этого кода arg1 рассматривается как строка
        console.log('первый аргумент – это строка');
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
// в рамках этого кода arg1 и arg2 рассматриваются как числа
        console.log('оба аргумента – числа');
        return arg1 + arg2;
    }
    console.log('default return');
    return arg1.toString() + arg2.toString();
}

console.log(`addWithTypeGuard(1,2)= ${addWithTypeGuard(1, 2)}`);

console.log(`addWithTypeGuard("1", "2") = ${addWithTypeGuard("1", "2")}`);

console.log(`addWithTypeGuard(1, "2") = ${addWithTypeGuard(1, "2")}`);

type StringOrNumber = string | number;

function addWithAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}

type CallbackWithString = (a: string) => void;

function usingCallbackWithString(callback: CallbackWithString) {
    callback("this is a string");
}

let x: number | undefined;
x = 1;
x = undefined;


function alwaysThrows(): never {
    throw "this will always throw";
    // return -1;
}

enum TestNeverEnum {
    FIRST,
    SECOND,
}

function getEnumValue(value: TestNeverEnum): string {
    switch (value) {
        case TestNeverEnum.FIRST:
            return "First case";
        case TestNeverEnum.SECOND:
            return "Second case";
    }
    let returnValue: never = value;
}

let unknownType: unknown = "an unknown string";
console.log(`unknownType : ${unknownType}`);
unknownType = 1;
console.log(`unknownType : ${unknownType}`);

let numberType: number;
numberType = <number>unknownType;

let firstObj = {id: 1, name: "firstObj"};
let secondObj = {...firstObj};
console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let nameObj = {name: "nameObj"};
let idObj = {id: 2};
let obj3 = {...nameObj, ...idObj};
console.log(`obj3 : ${JSON.stringify(obj3)}`);

let objPrec1 = {id: 1, name: "object prec 1"};
let objPrec2 = {id: 1001, description: "object prec 2 descripton"};
let obj4 = {...objPrec1, ...objPrec2};
console.log(`obj4 : ${JSON.stringify(obj4)}`);

let firstArray = [1, 2, 3, 4, 5];
console.log(`firstArray=${firstArray}`);
firstArray = [...firstArray, 6, 7, 8];
console.log(`firstArray=${firstArray}`);

let secondArray = [
    {id: 1, name: "name1"},
    {id: 2, name: "name2"}
];
console.log(`secondArray : ${JSON.stringify(secondArray)}`);
secondArray = [
    {id: -1, name: "name-1"},
    ...secondArray,
    {id: 1, name: "name3"},
];
console.log(`secondArray : ${JSON.stringify(secondArray)}`);


let tupleType: [string, boolean];
tupleType = ["test", false];
// tupleType = ["test"];

console.log(`tupleType[0] : ${tupleType[0]}`);
console.log(`tupleType[1] : ${tupleType[1]}`);
// console.log(`tupleType[2] : ${tupleType[2]}`);

let [t1, t2] = tupleType;
console.log(`t1: ${t1}`);
console.log(`t2: ${t2}`);

let optionalTuple: [string, boolean?];
optionalTuple = ["test2", true];
console.log(`optionalTuple : ${optionalTuple}`);
optionalTuple = ["test"];
console.log(`optionalTuple : ${optionalTuple}`);

function useTupleAsRest(...args: [number, string, boolean]) {
    let [arg1, arg2, arg3] = args;
    console.log(`arg1: ${arg1}`);
    console.log(`arg2: ${arg2}`);
    console.log(`arg3: ${arg3}`);
}

useTupleAsRest(1, "stringValue", false);

type RestTupleType = [number, ...string[]];
let restTuple: RestTupleType = [1, "string1", "string2", "string3"];

