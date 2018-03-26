import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('quiz', function() {
    this.route('question');
    this.route('name');
    this.route('time');
    this.route('size');
    this.route('detail');
    this.route('mail');
  });
});

export default Router;
