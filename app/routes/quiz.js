import Route from '@ember/routing/route';

export default Route.extend({
  user: Ember.inject.service("user"),
  beforeModel(transition) {
    console.log("USer");
    if(!this.get("user").isUser()){
      this.transitionTo('name');
    }

  },
  model(){

  }
});
