import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  api: Ember.inject.service(),

  model() {
    return {
      ipsum: {
        title: '',
        text: '',
        g_markov: false
      }
    }
  },

  actions: {
    create() {
      let ipsum = this.currentModel;

      this.get('api').authenticated('/ipsums', 'POST', ipsum)
      .then((res, err) => {
        this.transitionTo('ipsums.show', res.ipsum.id);
      }, (err) => {
        this.controller.set('errors', err.errors);
      });
    }
  }
});
