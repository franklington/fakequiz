import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question'),
  status: DS.attr('boolean'),
  input: DS.attr('boolean')
});
