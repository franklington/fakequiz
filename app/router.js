import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('name');
  this.route('quiz', function() {
    this.route('question');
    this.route('time');
    this.route('size');
    this.route('detail');
    this.route('mail');
  });
  this.route('create', function() {
    this.route('question');
  });
});

export default Router;
