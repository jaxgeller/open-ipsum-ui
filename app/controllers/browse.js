import Ember from 'ember';

export default Ember.Controller.extend({
  query: "",
  searchResults: null,
  actions: {
    search() {
      this.api.request(`/search?q=${this.get('query')}`).then(res=> {
        if (res.ipsums.length) {
          this.set('searchResults', res);
        }
      });
    }
  }
});
