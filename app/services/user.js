import Service from '@ember/service';

export default Service.extend({
  user: null,
  answered: 0,
  hasToAnswer:8,

  questions: null,

  
  init() {
  this._super(...arguments);
  },
  isUser(){
    if(this.get('user')){
        return true
    }

    else {
        return false;
    }

  },
  getNextQuestion(){
    let question = this.get("questions").objectAt(this.get("answered"));
    this.incrementProperty('answered');

    return question;


  }
});
