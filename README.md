# Type

## Example

```js
import {type} from 'jeffmcmahan/type'

const foo = (id, name, data) => {

    type (id) (Number)
    type (name) (String)
    type (data) (Object, null)

    // ...
}
```