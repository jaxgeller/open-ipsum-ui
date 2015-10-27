import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  classNameBindings: ['isValid:active:inactive'],
  isValid: false,

  type: 'markov',

  actions: {
    validate() {
      let title = this.get('data.ipsum.title').replace(/ /g,'');
      let text = this.get('data.ipsum.text');

      if ( title.length >= 3 &&
          title.length <= 50 &&
          text.split(/\.|\?|\!/).length &&
          text.split(' ').length > 10 ){

        this.set('isValid', true)
      }

      else {
        this.set('isValid', false);
      }
    },

    create() {
      if (this.get('isValid')) {
        let data = {
          ipsum: {
            title: this.get('data.ipsum.title'),
            text: this.get('data.ipsum.text'),
            g_markov: true
          }
        }

        let t = this.get('session.token') + ':';

        this.get('ajax')
          .request('http://localhost:3000/ipsums', 'POST', {headers: {
          'Authorization': `Basic ${btoa(t)}`
        }, data:data})
      }
    }
  }
});
