export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

/*  this.transition(
    this.toRoute(
      ['quiz.index',
      'quiz.detail',
      'quiz.mail',
      'quiz.name',
      'quiz.question',
      'quiz.size',
      'quiz.time']),
      this.fromRoute(
        ['quiz.index',
        'quiz.detail',
        'quiz.mail',
        'quiz.name',
        'quiz.question',
        'quiz.size',
        'quiz.time']),

   this.use('toLeft'),
  this.reverse('toRight')

);*/

this.transition(
  this.outletName('main'),
  this.use('crossFade'),
   this.reverse('toRight')
);
}
