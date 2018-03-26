import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mail: DS.attr('string'),
  answers: DS.hasMany('answer')
});
