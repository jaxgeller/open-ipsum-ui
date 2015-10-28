import Ember from 'ember';
import AuthenticatedRoute from 'open-ipsum-ui/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRoute, {
  model() {
    return { ipsum: { title: '', text: '', user: null } }
  },

  actions: {
    create(data) {
      this.api.post('/ipsums', data)
      .then((res) => {
        this.transitionTo(`/ipsums/${res.ipsum.id}`)
      }, (err) => {
        console.log(err);
      });
    }
  }
});
