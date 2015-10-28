import Ember from 'ember';

export default Ember.Controller.extend({
  query: "",
  searchResults: null,
  actions: {
    search() {
      if (this.get('query')) {
        this.api.request(`/search?q=${this.get('query')}`).then(res=> {
          if (res.ipsums.length) {
            this.set('searchResults', res);
          } else {
            this.set('searchResults', null)
          }
        });
      } else {
        this.set('searchResults', null)
      }
    }
  }
});
