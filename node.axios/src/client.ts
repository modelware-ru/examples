import axios from 'axios';

// axios.get('http://localhost:8080/user?id=1234')
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         console.log(error);
//     })
//     .then(() => {
//         console.log('always');
//     });
//
// axios.get('http://localhost:8080/user',
//     {
//         params: {
//             id: 2345,
//             text: 'test',
//         }
//     })
//     .then((response: any) => {
//         console.log(response);
//     })

axios.defaults.baseURL = 'http://localhost:8080';

axios.post('/user1',
    {
        id: 1112345,
        text: 'test111',
    })
    .then((response: any) => {
        console.log(response);
    })