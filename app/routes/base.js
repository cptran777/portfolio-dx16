/**
 * routes/base.js
 *
 * This route is the base route to be extended by all other routes. Primary functionality is to
 * easily connect every route to shared services and hooks without having to create the same 
 * hook repeatedly on every route
 */
import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * Inject service for route name
   */
  currentRoute: Ember.inject.service(),

  /**
   * After the model has loaded successfully for each route, use the currentRoute service function
   * to update the current route name
   * @return {undefined}
   */
  afterModel() {
    this.get('currentRoute').changeRoute(this.routeName);
  }
});
