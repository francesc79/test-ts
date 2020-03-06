import _ from 'lodash';
import { INDEX_FIELD } from './Consts';

export class Test {
  /**
   * @param {object} obj
   * @param {object} vm
   */
  test(obj, vm) {
    let index = 0;
    vm.objects = _.mapValues(
      obj,
      object => ({ ...object, [INDEX_FIELD]: index++ }),
    );
  }

}
