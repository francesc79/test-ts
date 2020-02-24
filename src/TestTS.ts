

export class TestTS {
    callAsync() : Promise<number> {
        return Promise.resolve(1);
    }

    async test() {
        await this.callAsync();
    }
}