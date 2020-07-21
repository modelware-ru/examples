namespace async {
    function delayedResponseWithCallback(callback: Function) {
        function delayedAfterTimeout() {
            console.log(`delayedAfterTimeout`);
            callback();
        }

        setTimeout(delayedAfterTimeout, 1000);
    }

    function callDelayedAndWait() {
        function afterWait() {
            console.log(`afterWait`);
        }

        console.log(`calling delayedResponseWithCallback`);
        delayedResponseWithCallback(afterWait);
        console.log(`after calling delayedResponseWithCallback`);
    }

    // callDelayedAndWait();


    function fnDelayedPromise(
        resolve: () => void,
        reject: () => void) {
        function afterTimeout() {
            resolve();
        }

        setTimeout(afterTimeout, 2000);
    }

    function delayedResponsePromise(): Promise<void> {
        return new Promise<void>(
            fnDelayedPromise
        );
    }

    function delayedPromise(): Promise<void> {
        return new Promise<void>
        (
            (resolve: () => void,
             reject: () => void
            ) => {
                function afterTimeout() {
                    resolve();
                    // reject();
                }

                setTimeout(afterTimeout, 1000);
            }
        );
    }

    function callDelayedPromise() {
        console.log(`calling delayedPromise`);
        delayedPromise().then(
            () => {
                console.log(`delayedPromise.then()`)
            }
        ).catch(
            () => {
                console.log(`delayedPromise.catch()`)
            }
        );
    }

    // callDelayedPromise();

    function errorPromise(): Promise<void> {
        return new Promise<void>
        (
            (resolve: () => void,
             reject: () => void
            ) => {
                reject();
            }
        );
    }

    function callErrorPromise() {
        console.log(`calling errorPromise`);
        errorPromise().then(
            () => {
                console.log(`no error.`)
            }
        ).catch(
            () => {
                console.log(`an error occurred`)
            }
        );
    }

    // callErrorPromise();


    function delayedPromiseWithParam(): Promise<string> {
        return new Promise<string>(
            (
                resolve: (str: string) => void,
                reject: (str: string) => void
            ) => {
                function afterWait() {
                    resolve("resolved_within_promise");
                }

                setTimeout(afterWait, 2000);
            }
        );
    }

    function callPromiseWithParam() {
        console.log(`calling delayedPromiseWithParam`);
        delayedPromiseWithParam().then((message: string) => {
            console.log(`Promise.then() returned ${message} `);
        });
    }

    // callPromiseWithParam();

    interface IPromiseMessage {
        message: string;
        id: number;
    }
    function promiseWithInterface() : Promise<IPromiseMessage> {
        return new Promise<IPromiseMessage> (
            (
                resolve: (message: IPromiseMessage) => void,
                reject: (message: IPromiseMessage) => void
            ) => {
                resolve({message: "test", id: 1});
            }
        );
    }

    function awaitDelayed() : Promise<void> {
        return new Promise<void> (
            ( resolve: () => void,
              reject: () => void ) =>
            {
                function afterWait() {
                    console.log(`calling resolve`);
                    resolve();
                }
                setTimeout(afterWait, 1000);
            }
        );
    }

    async function callAwaitDelayed() {
        console.log(`call awaitDelayed`);
        await awaitDelayed();
        console.log(`after awaitDelayed`);
    }
    // callAwaitDelayed();

    function awaitError() : Promise<string> {
        return new Promise<string> (
            ( resolve: (message: string) => void,
              reject: (error: string) => void ) =>
            {
                function afterWait() {
                    console.log(`calling reject`);
                    reject("an error occurred");
                }
                setTimeout(afterWait, 1000);
            }
        );
    }


    async function callAwaitError() {
        console.log(`call awaitError`);
        try {
            await awaitError();
        } catch (error) {
            console.log(`error returned : ${error}`);
        }
        console.log(`after awaitDelayed`);
    }
    // callAwaitError();


    function asyncWithMessage() : Promise<string> {
        return new Promise<string> (
            (
                resolve: (message: string ) => void,
                reject: (message: string) => void
            ) => {
                function afterWait() {
                    resolve("resolve_message");
                }
                setTimeout(afterWait, 1000);
            }
        );
    }

    asyncWithMessage().then(
        (res) => {
            console.log('ok1: ' + res);
        }
    )
    console.log ('something 1');

    async function fAsyncWithMessage() {
        let res:string = await asyncWithMessage();
        console.log ('something 2: ' + res);
    }
    fAsyncWithMessage();
    console.log ('something 3');


    function asyncWithMessage2() : Promise<string> {
        return new Promise<string> (
            (
                resolve: (message: string ) => void,
                reject: (message: string) => void
            ) => {
                function afterWait() {
                    resolve("resolve_message");
                }
                setTimeout(afterWait, 1000);
            }
        );
    }
}