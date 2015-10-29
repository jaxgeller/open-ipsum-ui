import Ember from 'ember';

export default Ember.Controller.extend({
  query: "",
  searchQuery: "",
  searchResults: null,


  actions: {
    search() {
      this.set('searchQuery', this.get('query').trim())
      let q = this.get('searchQuery');

      if (q) {
        this.api.request(`/search?q=${q}`).then(res=> {
          if (res.ipsums.length)
            this.set('searchResults', res);
          else
            this.set('searchResults', null);
        });
      }
    }
  }
});
