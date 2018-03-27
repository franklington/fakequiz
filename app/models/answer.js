import DS from 'ember-data';
import { computed } from '@ember/object';


export default DS.Model.extend({
  question: DS.belongsTo('question'),
  user: DS.belongsTo('user'),
  biggerButton: DS.attr('boolean'),
  input: DS.attr('boolean'),
  falseButton: DS.attr('number'),
  trueButton: DS.attr('number'),
  trueButtonSize: computed('trueButton', function() {
    return Math.floor(this.get('trueButton')/100);
  }),
  falseButtonSize: computed('falseButton', function() {
    return Math.floor(this.get('falseButton')/100);
  }),
});
