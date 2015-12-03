import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model(params) {
    return this.get('api').request(`/ipsums/${params.id}`);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      paragraphs: 5,
      paragraphHTML: false
    });
  },

  actions: {
    regenerate() {
      this.get('api').request(`/ipsums/${this.currentModel.ipsum.id}`).then(res=> {
        this.controller.set('model.generated', res.generated);
      });
    }
  }
});
