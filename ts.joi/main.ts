const util = require('util');
const Joi = require('joi');

let schema;
let res;

schema = Joi.object(
    {
        username: Joi.string(),
    }
);

res = schema.validate({username: 'ab'});
// console.log(util.inspect(res, {showHidden: false, depth: null}));
console.log(res);
console.log('---------');

res = schema.validate({username: 1});
// console.log(util.inspect(res, {showHidden: false, depth: null}));
console.log(res);
console.log('---------');

res = schema.validate({});
// console.log(util.inspect(res, {showHidden: false, depth: null}));
console.log(res);
console.log('---------');

schema = Joi.object(
    {
        username: Joi.string().required(),
    }
);

res = schema.validate({});
// console.log(util.inspect(res, {showHidden: false, depth: null}));
console.log(res);
console.log('---------');

schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
})
    .with('username', 'birth_year')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');


res = schema.validate({username: 'abc', birth_year: 1994});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc'});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc1', birth_year: 1994, access_token: 123});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc1', birth_year: 1994, access_token: '123'});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc1', birth_year: 1994, access_token: true});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc1', birth_year: 2010.3, access_token: 'ok'});
console.log(res);
console.log('---------');

res = schema.validate({username: 'abc1', birth_year: 2010, access_token: 'ok'});
console.log(res);
console.log('---------');


schema = Joi.string().min(10);

res = schema.validate(12);
console.log(res);
console.log('---------');

res = schema.validate('12');
console.log(res);
console.log('---------');

res = schema.validate('1234567890');
console.log(res);
console.log('---------');

console.log(Joi.string().validate(undefined));
console.log('---------');

console.log(Joi.string().required().validate(undefined));
console.log('---------');

console.log(Joi.string().validate(undefined, /* options */ {presence: "required"}));
console.log('---------');

try {
    console.log(Joi.assert('x', Joi.number()));
} catch (e) {
    console.log(e);
}

try {
    console.log(Joi.assert(12, Joi.number()));
} catch (e) {
    console.log(e);
}

try {
    console.log(Joi.assert('x', Joi.number(), 'PREFIX'));
} catch (e) {
    console.log(e);
}

try {
    console.log(Joi.attempt('x', Joi.number()));
} catch (e) {
    console.log(e);
}

try {
    console.log(Joi.attempt(22, Joi.number()));
} catch (e) {
    console.log(e);
}


const custom = Joi.defaults((schema) => {

    switch (schema.type) {
        case 'string':
            return schema.required();
        case 'object':
            return schema.min(1);
        default:
            return schema;
    }
});

console.log(custom.string().validate('undefined'));
console.log(custom.string().validate(''));

schema = Joi.object({
    a: Joi.array().items(Joi.number()),
    b: Joi.number().valid(Joi.in('a'))
})

console.log(schema.validate({
    a: [
        1, 2, 3, 4, 5
    ],
    b: 5
}));

console.log(schema.validate({
    a: [
        1, 2, 3, 4, 5
    ],
    b: 51
}));

let errs;

errs = {
    any: {
        only: 'errrrrrrrrr',
    }
};

schema = Joi.object(
    {
        x: {
            a: Joi.any(),
            b: {
                c: Joi.any(),
                d: Joi.ref('c')
            }
        },
        y: Joi.any()
    })
    .options({
        messages: {
            'any.only': '!!!!!!!!!!!!!!!!!!!!!!',
        },
    })
    // .error((errors) => {
    //     // return errs;
    //     return new Error('custom error');
    // });

console.log(schema.validate({
    x: {
        a: true,
        b: {
            c: 12,
            d: 12,
        },
    },
    y: "string",
}));

console.log(schema.validate({
    x: {
        a: true,
        b: {
            c: 12,
            d: 122,
        },
    },
    y: "string",
}));

console.log(util.inspect(schema.validate({
    x: {
        a: true,
        b: {
            c: 12,
            d: 122,
        },
    },
    y: "string",
}), {showHidden: false, depth: null}));


schema = Joi.number()
    .ruleset.min(1).max(10).rule({ message: 'Number must be between 1 and 10' })
;
console.log(schema.validate(8));

console.log('the end');