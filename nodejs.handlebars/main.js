const fs = require('fs');

const Handlebars = require("handlebars");

let fileName = 'bk__top_5.htm';
let content = fs.readFileSync(fileName).toString();

let data = {
    next_url: 'next_url',
    woman: [
        {
            name: 'name 1',
            age: 'age 1',
            picture_url: 'picture_url_1',
            meet_url: 'meet_url_1',
        },
        {
            name: 'name 2',
            age: 'age 2',
            picture_url: 'picture_url_2',
            meet_url: 'meet_url_2',
        },
        {
            name: 'name 3',
            age: 'age 3',
            picture_url: 'picture_url_3',
            meet_url: 'meet_url_3',
        },
    ]
};

const template = Handlebars.compile(content);

fs.writeFileSync(fileName + '.html', template(data));
