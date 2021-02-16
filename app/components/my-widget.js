import Component from '@glimmer/component';
import { use } from 'ember-could-get-used-to-this';
import MyResource from 'ember-get-used-bug-repro/helpers/my-resource';

export default class MyWidget extends Component {
  title = 'my custom title';

  @use res1 = new MyResource(() => ['hello-from-arg1']);

  constructor(_owner, _args) {
    super(...arguments);

    console.log(this.res1);
  }
}
