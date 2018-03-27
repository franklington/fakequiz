import Route from '@ember/routing/route';

export default Route.extend({
  user: Ember.inject.service("user"),
  beforeModel(transition) {

  },


  model(){


    //this.set('user.questions', this.store.findAll('question'));
    return   this.store.createRecord('user').save().then((user)=>{
        this.set('user.user', user);
        this.store.query('question', {
          limitToLast: 5
        }).then((questions) => {
          questions.forEach((question)=>{
            //Calculate Random Random BUttonsize
            let number = 1000;
            let trueButton = Math.floor(Math.random() * Math.floor(900) + 100);
            let biggerButton = false;
            if(trueButton >  500)
              biggerButton= true;

            let answer = this.store.createRecord('answer',{'question':question, 'user': user, "trueButton": trueButton, "falseButton": (number-trueButton), "biggerButton": biggerButton });
            this.get("user.user.answers").pushObject(answer);
            answer.save().then(function () {
                question.save().then(function () {
                  user.save();
                });
            });
          });    // Do something with `peters`
        });
        return user;
      });
      /*comment.save().then(function () {
        blogPost.save();
      });;*/

  },
  actions: {

  }
});
