import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  api: Ember.inject.service(),

  actions: {
    create() {
      let ipsum = {ipsum: this.get('controller').getProperties('title', 'text')};
      ipsum.ipsum.g_markov = this.get('controller.g_markov') || false;

      this.get('api').authenticated('/ipsums', 'POST', ipsum).then((res) => {
        this.transitionTo('ipsums.show', res.ipsum.id);
      });
    }
  }
});
