import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.modelFor("quiz");
  },
  actions: {
    saveForward(){
      this.model.save();
      this.transitionTo('quiz.question');
    }
  }
});
