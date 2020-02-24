export class TestTS {
    callAsync() {
        return Promise.resolve(1);
    }
    async test() {
        await this.callAsync();
    }
}
//# sourceMappingURL=TestTS.js.map