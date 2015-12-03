import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  api: Ember.inject.service(),

  model(params) {
    return this.get('api').request(`/ipsums/${params.id}`);
  },

  actions: {
    publish() {
      let ipsum = this.currentModel;

      this.get('api').authenticated('/ipsums', 'POST', ipsum)
      .then((res, err) => {
        this.transitionTo('ipsums.show', res.ipsum.id);
      }, (err) => {
        this.controller.set('errors', err.errors);
      });
    },

    delete() {
      let id = this.currentModel.ipsum.id;
      this.get('api').authenticated(`/ipsums/${id}`, 'DELETE').then(res=> {
        this.transitionTo('browse');
      })
    }
  }
});
