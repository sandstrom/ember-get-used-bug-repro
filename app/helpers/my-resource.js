import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';

export default class MyResource extends Resource {
  @tracked value;

  setup() {
    this.value = this.args.positional[0];
  }
}
