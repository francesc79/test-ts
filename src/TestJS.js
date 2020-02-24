

export class TestJS {
    callAsync() {
        return Promise.resolve(1);
    }

    async test() {
        await this.callAsync();
    }
}