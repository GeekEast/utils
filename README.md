### `reduceBy()`
> Aggregage things by key
```javascript
var things = [
    { name: 'foo', input: 'bar' },
    { name: 'baz', input: 'zle' },
    { name: 'foo', input: 'ss'},
];
reduceBy(things,'name'))

```
- Result
```
{ foo: [ { name: 'foo', input: 'bar' }, { name: 'foo', input: 'ss' } ],
  baz: [ { name: 'baz', input: 'zle' } ] }
```