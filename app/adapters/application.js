import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  shouldBackgroundReloadRecord() {
    return false;
  }
});
