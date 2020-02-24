# Typescript 3.8.2


## install and build
```
npm i && npm run build
```
## Inside build folder

### TestJS.d.ts

```
export class TestJS {
    callAsync(): Promise<number>;
    async test(): Promise<void>;  --> 'async' modifier cannot be used in an ambient context.ts(1040)
}
```

### TestTS.d.ts

```
export declare class TestTS {
    callAsync(): Promise<number>;
    test(): Promise<void>;
}
```