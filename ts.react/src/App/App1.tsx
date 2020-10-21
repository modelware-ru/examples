import * as React from 'react';

let Welcome = (props: any) => {
    return <h1>Hello, {props.name}, ({props.age})</h1>
}

let App1 = (props: any) => {
    return (
        <div>
            <Welcome name={props.name}/>
            <Welcome name={`${props.name}_1`} age={12}/>
            <Welcome name={`${props.name}_2`} age={13}/>
        </div>
    )
}

export default App1;