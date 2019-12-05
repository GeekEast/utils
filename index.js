const _ = require('lodash');

export const reduceBy = (things,key) => _.reduce(things, (map, thing) => {
    const by = thing[key];
    (map[by] || (map[by] = [])).push(thing);
    return map; // update map
  },{}); 

