/**
 * services/current-route.js
 *
 * The currentRoute service is injected into every route and is called during didTransition to
 * track which route is currently the active one
 */
import Ember from 'ember';

export default Ember.Service.extend({
  /**
   * Name of the active route
   * @type {String}
   */
  activeRoute: null,

  /**
   * Called when the service is initialized
   * @return {undefined}
   */
  init() {
    this._super(...arguments);
    this.set('activeRoute', 'index');
  },

  /**
   * Called by the route that the service is injected into after a transition in order to update
   * the current route
   * @param {String} newRoute - name of the transitioned route
   * @return {undefined}
   */
  changeRoute(newRoute) {
    this.set('activeRoute', newRoute);
  }
});
