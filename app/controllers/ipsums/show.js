import Ember from 'ember';
import random from 'open-ipsum-ui/utils/random-int';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  currentUser: Ember.computed('session.username', 'model.ipsum.user.username', function() {
    return this.get('model.ipsum.user.username') === this.get('session.username');
  }),

  textBuffer: Ember.computed('model.generated.text', function() {
    let srcText = this.get('model.generated.text');
    let text = srcText.match(/[^\.!\?]+[\.!\?]+/g);
    let holder = [];

    for (let i =0; i < 10; i++) {
      let h = [];
      let pLength = random(2, 5);

      for (let j =0; j < pLength; j++) {
        let t = text[random(0, text.length)];
        h.push(t);
      }

      holder.push(h);
    }
    return holder;
  }),

  actions: {
    editParagraphs(params) {
      if (this.get('paragraphs') < 2 && params === -1) {
        params = 0;
      }
      if (this.get('paragraphs') > 9 && params === 1) {
        params = 0;
      }

      this.incrementProperty('paragraphs', params);
    },

    addHTML() {
      this.toggleProperty('paragraphHTML');
    },

    apiify() {
      window.alert('curl https://api.openipsum.com/ipsums/' + this.get('model.ipsum.id'));
    }
  }
});
