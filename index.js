const _ = require('lodash');

const reduceBy = (things,key) => _.reduce(things, (map, thing) => {
    const by = thing[key];
    (map[by] || (map[by] = [])).push(thing);
    return map; // update map
  },{}); 

var things = [
    { name: 'foo', input: 'bar' },
    { name: 'baz', input: 'zle' },
    { name: 'foo', input: 'ss'},
];

console.log(reduceBy(things,'name'));