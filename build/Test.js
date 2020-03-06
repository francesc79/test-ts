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