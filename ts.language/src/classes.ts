interface IComplexType5 {
    id: number;
    name: string;
}

let complexType5: IComplexType5;
complexType5 = {id: 1, name: "test"};

interface IOptionalProp {
    id: number;
    name?: string;
}

let idOnly: IOptionalProp = {id: 1};
let idAndName: IOptionalProp = {id: 2, name: "idAndName"};
idAndName = idOnly;

interface IWeakType {
    id?: number,
    name?: string
}

let weakTypeNoOverlap: IWeakType;
weakTypeNoOverlap = {name: "my description"};

interface IHasIdAndNameProperty {
    id: number;
    name: string;
}

interface IHasDescAndValueProperty {
    description: string;
    value: number;
}

function printNameOrDescription(
    value: IHasIdAndNameProperty | IHasDescAndValueProperty) {
    if ('id' in value) {
        console.log(`found id ! | name : ${value.name}`);
    }
    if ('value' in value) {
        console.log(`found value ! : description :${value.description}`);
    }
}

class SimpleClass {
    id: number | undefined;

    print(): void {
        console.log(`SimpleClass has id : ${this.id}`);
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 1001;
mySimpleClass.print();


interface IPrint {
    print(): void;
}

function printClass(a: IPrint) {
    a.print();
}

class ClassA implements IPrint {
    print() {
        console.log('ClassA.print()')
    };
}

class ClassB implements IPrint {
    print() {
        console.log('ClassB.print()')
    };
}

let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);

class ClassWithConstructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

var classWithConstructor = new ClassWithConstructor(1, "name");
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

class ComplexType implements IComplexType {
    id: number;
    name: string;

    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any) {
        if (true || typeof idArg === "number") {
            this.id = idArg;
        }
        this.name = nameArg;
    }

    print(): string {
        return "id:" + this.id + " name:" + this.name;
    }

    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1;
    }

    usingOptionalParameters(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }

    usingDefaultParameters(defaultArg1: number = 0) {
        this.id = defaultArg1;
    }

    usingRestSyntax(...argArray: number []) {
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    }

    usingFunctionCallbacks(callback: (id: number) => string) {
        callback(this.id);
    }
}

let ct_1 = new ComplexType(1, "ct_1");
let ct_2 = new ComplexType("abc", "ct_2");
// let ct_3 = new ComplexType(true, "test");

ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({id: 1, name: "string"});

ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();

ct_1.usingDefaultParameters(1);
ct_2.usingDefaultParameters();

ct_1.usingRestSyntax(1, 2, 3);
ct_2.usingRestSyntax(1, 2, 3, 4, 5);

function myCallbackFunction(id: number): string {
    return id.toString();
}

ct_1.usingFunctionCallbacks(myCallbackFunction);

interface IComplexType {
    id: number;
    name: string;

    print(): string;

    usingTheAnyKeyword(arg1: any): any;

    usingOptionalParameters(optionalArg1?: number): void;

    usingDefaultParameters(defaultArg1?: number): void;

    usingRestSyntax(...argArray: number []): void;

    usingFunctionCallbacks(callback: (id: number) => string): void;
}

class ClassWithPublicProperty {
    public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
    private id: number;

    constructor(_id: number) {
        this.id = _id;
    }
}

let privateAccess = new ClassWithPrivateProperty(10);

// privateAccess.id = 20;

class classWithAutomaticProperties {
    constructor(public id: number, private name: string) {
    }
}

let myAutoClass = new classWithAutomaticProperties(1, "className");
console.log(`myAutoClass id: ${myAutoClass.id}`);

// console.log(`myAutoClass.name: ${myAutoClass.name}`);

class ClassWithReadOnly {
    readonly name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    setReadOnly(_name: string) {
// генерирует ошибку компиляции
//         this.name = _name;
    }
}

class ClassWithAccessors {
    private _id: number | undefined;
    get id() {
        console.log(`inside get id()`);
        return <number>this._id;
    }

    set id(value: number) {
        console.log(`inside set id()`);
        this._id = value;
    }
}

var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2;
console.log(`id property is set to ${classWithAccessors.id}`);


class StaticClass {
    id: number | undefined;

    static printTwo() {
        console.log(`2`);
    }
}

StaticClass.printTwo();

class StaticProperty {
    static count = 0;

    updateCount() {
        StaticProperty.count++;
    }
}

let firstInstance = new StaticProperty();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

let secondInstance = new StaticProperty();
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);


namespace FirstNameSpace {
    class NotExported {
    }

    export class NameSpaceClass {
        id: number | undefined;
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported();

namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string | undefined;
    }
}
let secondNameSpace = new SecondNameSpace.NameSpaceClass();

interface IBase {
    id: number | undefined;
}

interface IDerivedFromBase extends IBase {
    name: string | undefined;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
    id: number | undefined;
    name: string | undefined;
}


class BaseClass implements IBase {
    id: number | undefined;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string | undefined;
}

interface IFirstInterface {
    id: number | undefined;
}

interface ISecondInterface {
    name: string | undefined;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
    id: number | undefined;
    name: string | undefined;
}

class BaseClassWithConstructor {
    private id: number;

    constructor(_id: number) {
        this.id = _id;
    }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
    private name: string;

    constructor(_id: number, _name: string) {
        super(_id);
        this.name = _name;
    }
}


class BaseClassWithFunction {
    public id: number | undefined;

    getProperties(): string {
        return `id: ${this.id}`;
    }
}

class DerivedClassWithFunction extends BaseClassWithFunction {
    public name: string | undefined;

    getProperties(): string {
        return `${super.getProperties()}` + ` , name: ${this.name}`;
    }
}


var derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());


class ClassUsingProtected {
    protected id: number | undefined;

    public getId() {
        return this.id;
    }
}

class DerivedFromProtected extends ClassUsingProtected {
    constructor() {
        super();
        this.id = 0;
    }
}

var derivedFromProtected = new DerivedFromProtected();
// derivedFromProtected.id = 1;
console.log(`getId returns: ${derivedFromProtected.getId()}`);


class Employee {
    public id: number | undefined;
    public name: string | undefined;

    printDetails() {
        console.log(`id: ${this.id}` + `, name ${this.name}`);
    }
}

class Manager {
    public id: number | undefined;
    public name: string | undefined;
    public Employees: Employee[] | undefined;

    printDetails() {
        console.log(`id: ${this.id} ` + `, name ${this.name}, employeeCount ${this.Employees?.length}`);
    }
}

abstract class AbstractEmployee {
    public id: number | undefined;
    public name: string | undefined;

    abstract getDetails(): string;

    public printDetails() {
        console.log(this.getDetails());
    }
}

class NewEmployee extends AbstractEmployee {
    getDetails(): string {
        return `id : ${this.id}, name : ${this.name}`;
    }
}

class NewManager extends NewEmployee {
    public Employees: NewEmployee[] | undefined;

    getDetails(): string {
        return super.getDetails() + `, employeeCount ${this.Employees?.length}`;
    }
}

var employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();

var manager = new NewManager();
manager.id = 2;
manager.name = "Manager Name";
manager.Employees = [];
manager.printDetails();

class A {
}

class BfromA extends A {
}

class CfromA extends A {
}

class DfromC extends CfromA {
}

function checkInstanceOf(value: A | BfromA | CfromA | DfromC) {
    console.log(`checking instanceof :`)
    if (value instanceof A) {
        console.log(`found instanceof A`);
    }
    if (value instanceof BfromA) {
        console.log(`found instanceof BfromA`);
    }
    if (value instanceof CfromA) {
        console.log(`found instanceof CFromA`);
    }
    if (value instanceof DfromC) {
        console.log(`found instanceof DfromC`);
    }
}

checkInstanceOf(new A());
checkInstanceOf(new BfromA());
checkInstanceOf(new CfromA());
checkInstanceOf(new DfromC());


enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefined
}

interface IPerson {
    Category: PersonCategory;

    canSignContracts(): boolean;

    printDetails(): void;
}

abstract class Person implements IPerson {
    Category: PersonCategory;
    private DateOfBirth: Date;

    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth;
        this.Category = PersonCategory.Undefined;
    }

    abstract canSignContracts(): boolean;

    printDetails(): void {
        console.log(`Person : `);
        console.log(`Date of Birth : `
            + `${this.DateOfBirth.toDateString()}`);
        console.log(`Category : `
            + `${PersonCategory[this.Category]}`);
        console.log(`Can sign : `
            + `${this.canSignContracts()}`);
    }
}


class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    }

    canSignContracts(): boolean {
        return false;
    }
}

class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    }

    canSignContracts(): boolean {
        return false;
    }
}

class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    }

    canSignContracts(): boolean {
        return true;
    }
}


class PersonFactory {
    getPerson(dateOfBirth: Date): IPerson {
        let dateNow = new Date(); // defaults to now.
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();
        let dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        let date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    }
}


let factory = new PersonFactory();
let p1 = factory.getPerson(new Date(2017, 0, 20));
p1.printDetails();
let p2 = factory.getPerson(new Date(2010, 0, 20));
p2.printDetails();
let p3 = factory.getPerson(new Date(1969, 0, 20));
p3.printDetails();

console.log('ok');