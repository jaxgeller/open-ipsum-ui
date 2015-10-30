import Ember from 'ember';

export default Ember.Controller.extend({
  searchResults: true,
  searchQuery: "",


  actions: {
    search() {
      this.set('searchQuery', this.get('query').trim());
      let q = this.get('searchQuery');

      if (q) {
        this.api.request(`/search?q=${q}`).then(res=> {
          if (res.ipsums.length) {
            this.set('searchResults', res.ipsums);
          } else {
            this.set('searchResults', false);
          }
        });
      } else {
        this.set('searchResults', true);
      }

    }
  }
});
