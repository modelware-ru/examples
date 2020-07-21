namespace generic {

    class Concatenator<T> {
        concatenateArray(inputArray: Array<T>): string {
            let returnString = "";
            for (let i = 0; i < inputArray.length; i++) {
                if (i > 0) returnString += ",";
                // @ts-ignore
                returnString += inputArray[i].toString();
            }
            return returnString;
        }
    }

    var stringConcat = new Concatenator<string>();
    var numberConcat = new Concatenator<number>();


    var stringArray: string[] = ["first", "second", "third"];
    var numberArray: number[] = [1, 2, 3];
    var stringResult = stringConcat.concatenateArray(stringArray);
    var numberResult = numberConcat.concatenateArray(numberArray);
    // var stringResult2 = stringConcat.concatenateArray(numberArray);
    // var numberResult2 = numberConcat.concatenateArray(stringArray);


    class MyClass {
        private _name: string;

        constructor(arg1: number) {
            this._name = arg1 + "_MyClass";
        }

        toString(): string {
            return this._name;
        }
    }

    let myArray: MyClass[] = [
        new MyClass(1),
        new MyClass(2),
        new MyClass(3)
    ];

    let myArrayConcatentator = new Concatenator<MyClass>();
    let myArrayResult = myArrayConcatentator.concatenateArray(myArray);
    console.log(myArrayResult);


    enum ClubHomeCountry {
        England,
        Germany
    }

    interface IFootballClub {
        getName(): string | undefined;

        getHomeCountry(): ClubHomeCountry | undefined;
    }

    abstract class FootballClub implements IFootballClub {
        protected _name: string | undefined;
        protected _homeCountry: ClubHomeCountry | undefined;

        getName() {
            return this._name
        };

        getHomeCountry() {
            return this._homeCountry
        };
    }

    class Liverpool extends FootballClub {
        constructor() {
            super();
            this._name = "Liverpool F.C.";
            this._homeCountry = ClubHomeCountry.England;
        }
    }

    class BorussiaDortmund extends FootballClub {
        constructor() {
            super();
            this._name = "Borussia Dortmund";
            this._homeCountry = ClubHomeCountry.Germany;
        }
    }

    class FootballClubPrinter<T extends IFootballClub>
        implements IFootballClubPrinter<T> {
        print(arg: T) {
            console.log(` ${arg.getName()} is ` +
                `${this.IsEnglishTeam(arg)}` +
                ` an English football team.`
            );
        }

        IsEnglishTeam(arg: T): string {
            if (arg.getHomeCountry() == ClubHomeCountry.England)
                return "";
            else return "NOT"
        }
    }

    let clubInfo = new FootballClubPrinter();
    clubInfo.print(new Liverpool());
    clubInfo.print(new BorussiaDortmund());

    interface IFootballClubPrinter<T extends IFootballClub> {
        print(arg: T): void;

        IsEnglishTeam(arg: T): void;
    }


    class FirstClass {
        id: number | undefined;
    }

    class SecondClass {
        name: string | undefined;
    }

    class GenericCreator<T> {
        // create(): T {
        //     return new T();
        // }
        create(arg1: { new(): T }): T {
            return new arg1();
        }
    }

    var creator1 = new GenericCreator<FirstClass>();
    var firstClass: FirstClass = creator1.create(FirstClass);
    var creator2 = new GenericCreator<SecondClass>();
    var secondClass: SecondClass = creator2.create(SecondClass);

    let trueValue = true;
    let printValue = trueValue === true ? "true" : "false";
    console.log(`printValue is : ${printValue}`);

    type numberOrString<T> = T extends number ? number : string;

    function isNumberOrString<T>(input: numberOrString<T>) {
        console.log(`numberOrString : ${input}`);
    }

    isNumberOrString<number>(1);
    isNumberOrString<string>("test");

    interface a {
        a: number;
    }

    interface ab {
        a: number;
        b: string;
    }

    interface abc {
        a: number;
        b: string;
        c: boolean;
    }

    type abc_ab_a<T> = T extends abc ? [number, string, boolean] :
        T extends ab ? [number, string] :
            T extends a ? [number]
                : never;

    function getKeyAbc<T>(key: abc_ab_a<T>): string {
        let [...args] = key;
        let keyString = ":";
        for (let arg of args) {
            keyString += `${arg}:`
        }
        return keyString;
    }

    let key10 = getKeyAbc<a>([1]);
    console.log(`key10 : ${key10}`);
    let key20 = getKeyAbc<ab>([1, "test"]);
    console.log(`key20 : ${key20}`);
    let key30 = getKeyAbc<abc>([1, "test2", true]);
    console.log(`key30 : ${key30}`);

    // let keyNever = getKeyAbc<string>([1]);
    // let keyABCWrong = getKeyAbc<abc>([1, "test"]);

    function compareTwoValues(input: string | number | Date, compareTo: string | number | Date) {
    }

    type dateOrNumberOrString<T> =
        T extends Date ? Date :
            T extends number ? Date | number :
                T extends string ? Date | number | string : never;

    function compareValues<T extends string | number | Date | boolean>(input: T, compareTo: dateOrNumberOrString<T>) {
        // Выполняем сравнение;
    }

    compareValues(new Date(), new Date());
    // compareValues(new Date(), 1);
    // compareValues(new Date(), "1");

    compareValues(1, 1);
    compareValues(1, Date.now());
    // compareValues(1, "1");

    // compareValues(true, "test");

    type extractArrayType<T> = T extends (infer U)[] ? U : never;
    let stringType: extractArrayType<["test"]> = "test";
    // let stringTypeNoArray: extractArrayType<"test"> = "test";

    type InferredAb<T> = T extends { a: infer U, b: infer U } ? U : T;
    type abInferredNumber = InferredAb<{ a: number, b: number }>;
    let abinf: abInferredNumber = 1;
    type abInferredNumberString = InferredAb<{ a: number, b: string }>;
    let abinfstr: abInferredNumberString = 1;
    abinfstr = "test";


    interface IPerson {
        id: number;
        name: string;
        surname: string;
    }

    type PersonPropertyLiteral = "id" | "name" | "surname";

    function getKeyOfUsingStringLiteral(ppl: PersonPropertyLiteral, value: IPerson): void {
        console.log(`${ppl} : ${value[ppl]}`)
    }

    function getKeyUsingKeyOf(key: keyof IPerson, value: IPerson): void {
        console.log(`${key} : ${value[key]}`);
    }

    let testPerson: IPerson = {id: 1, name: "test", surname: "true"};
    getKeyUsingKeyOf("id", testPerson);
    getKeyUsingKeyOf("name", testPerson);
    getKeyUsingKeyOf("surname", testPerson);

    // getKeyUsingKeyOf("notaproperty", testPerson);

    class ClassWithNumericProperty {
        [1]: string = "one";
    }

    let classWithNumeric = new ClassWithNumericProperty();
    console.log(`${classWithNumeric[1]}`);

    enum Currency {
        AUD = 36,
        PLN = 985,
        USD = 840
    }

    const CurrencyName = {
        [Currency.AUD]: "Australian Dollar",
        [Currency.PLN]: "Zloty"
    }

    console.log(`CurrencyName[Currency.AUD] = ${CurrencyName[Currency.AUD]}`);
    console.log(`CurrencyName[36] = ${CurrencyName[36]}`);

    function getCurrencyName<T, K extends keyof T>(key: K, map: T): T[K] {
        return map[key];
    }

    let name = getCurrencyName(Currency.AUD, CurrencyName);
    console.log(`name = ${name}`);
    name = getCurrencyName(Currency.PLN, CurrencyName);
    console.log(`name = ${name}`);

    // name = getCurrencyName(Currency.USD, CurrencyName);

    interface IAbcRequired {
        a: number;
        b: string;
        c: boolean;
    }

    type PartialProps<T> = {
        [K in keyof T]?: T[K];
    }

    type IPartialAbc = PartialProps<IAbcRequired>;

    let abNoCObject: IPartialAbc = { a: 1, b: "test" };
    let aNoBcObject: IPartialAbc = { a: 1 };

    type partialAbc = Partial<IAbcRequired>;
    type readonlyAbc = Readonly<IAbcRequired>;

    /* Выбираем набор свойств K из T; */
    // type Pick<T, K extends keyof T> = {
    //     [P in K]: T[P];
    // };

    type pickAb = Pick<IAbcRequired, "a" | "b">;
    let pickAbObject : pickAb = { a: 1, b: "test"};
    // let pickAcObject : pickAb = { a : 1, c: true};

    type recordAc = Record< "a" | "c", string>;
    let recordAcObject : recordAc = {a : "test", c: "test"};
    // let recordAcNumbers : recordAc = { a: 1, c: "test"};
}