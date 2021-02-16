import Application from 'ember-get-used-bug-repro/app';
import config from 'ember-get-used-bug-repro/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
