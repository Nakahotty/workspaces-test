import { createClient } from 'redis';

console.log('This is the COMMONS package!!!');

export const sayHello = (name) => {
    console.log(`Hello my G - ${name}`);
};

export const test = createClient;