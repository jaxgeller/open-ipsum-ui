import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  api: Ember.inject.service(),

  model(params) {
    return this.get('api').request(`/ipsums/${params.id}`);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      confirmDelete: false
    });
  },


  actions: {
    publish() {
      let ipsum = this.currentModel.ipsum;

      this.get('api').authenticated(`/ipsums/${ipsum.id}`, 'PUT', this.currentModel)
      .then(res => {
        this.transitionTo('ipsums.show', res.ipsum.id);
      }, err => {
        this.controller.set('errors', err.errors);
      });
    },

    delete() {
      let id = this.currentModel.ipsum.id;
      this.get('api').authenticated(`/ipsums/${id}`, 'DELETE')
      .then(()=> {
        this.transitionTo('browse');
      });
    }
  }
});
