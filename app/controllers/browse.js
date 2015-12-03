import Ember from 'ember';

export default Ember.Controller.extend({
  api: Ember.inject.service(),

  actions: {
    search() {
      let q = this.get('query').trim();

      if (q) {

        this.get('api').request(`/search?q=${q}`).then(res=> {
          this.set('searchResults', res);

          if (!res.ipsums.length) {
            this.set('noResults', true);
          } else {
            this.set('noResults', false);
          }
        });
      } else {
        this.set('searchResults', null);
      }
    }
  }
});
