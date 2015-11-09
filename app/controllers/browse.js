import Ember from 'ember';

export default Ember.Controller.extend({
  api: Ember.inject.service(),
  searchResults: null,

  actions: {
    search() {
      let q = this.get('query');

      this.get('api').request(`/search?q=${q}`).then(res=> {
        if (res.ipsums.length)
          this.set('searchResults', res);
        else
          this.set('searchResults', null);
      });
    }
  }
});
