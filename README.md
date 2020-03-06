# Typescript 3.8.3

## install and build
```
npm i && npm run build
```

## Problem explanation

In the file [Test.js](./src/Test.js) I created a simple class that  in a test method I use a constant.
But when I compile the file with tsc in the [Test.js](./build/Test.js) the import of INDEX_FIELD constant is missing.

```
import _ from 'lodash';
export class Test {
    /**
     * @param {object} obj
     * @param {object} vm
     */
    test(obj, vm) {
        let index = 0;
        vm.objects = _.mapValues(obj, object => ({ ...object, [INDEX_FIELD]: index++ }));
    }
}
//# sourceMappingURL=Test.js.map
```

With Typescript 3.7.5 it work well.