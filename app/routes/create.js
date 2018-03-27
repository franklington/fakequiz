import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('question');
  },


  actions: {
    createNew(){
      this.currentModel.save();
      
    }
  }
});
