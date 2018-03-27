import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  link: DS.attr('string'),
  solution: DS.attr('boolean'),
  answers: DS.hasMany('answer'),
  totalItems: DS.attr('Number',{"defaultValue": 0}),
});
