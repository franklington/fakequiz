import Route from '@ember/routing/route';

export default Route.extend({
  user: Ember.inject.service("user"),
  beforeModel(transition) {

  },

  model(){
    console.log(this.get("user.answered"));

      return this.get('user.user.answers');
  },

  actions: {
    answered(){


          if(this.get("user.hasToAnswer") < this.get("user.answered")){

              this.transitionTo("quiz.time");
          }


    }
  }

});
