/**
 * components/application/header-sidebar.js
 *
 * This is the component that handles the navigation and display of profile picture on the
 * application static route
 */
import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  /**
   * Inject the current rounte service
   * @type {Object}
   */
  currentRoute: inject.service(),

  /**
   * Inject the service to track the navbar state
   * @type {Object}
   */
  navbarState: inject.service(),

  /**
   * Computes the expanded state of the header-sidebar based ont he navbar state
   * @type {Boolean}
   */
  isCollapsed: computed.alias('navbarState.isCollapsed'),

  /**
   * Computes the expanded state of the header-sidebar
   * @type {Boolean}
   */
  isExpanded: computed.not('isCollapsed'),

  /**
   * Keeps track of the base routes to be used in the active route calculation
   * @type {Array}
   */
  baseRoutes: [{
    name: 'Home',
    val: 'index'
  }, {
    name: 'Interests',
    val: 'interests'
  }, {
    name: 'Portfolio',
    val: 'portfolio'
  }],

  /**
   * Uses the current route service property to render a list of routing button properties
   * with a "selected" property for the active route
   * @type {Array}
   */
  activeRoute: computed('currentRoute.activeRoute', function() {
    const baseRoutes = this.get('baseRoutes');
    const activeRoute = this.get('currentRoute').activeRoute;

    return baseRoutes.map(route => Object.assign({}, route, {
      selected: route.val === activeRoute
    }));
  }),

  actions: {
    onCollapse() {
      // Collapse the sidebar
    },

    onExpand() {
      // Expand the sidebar
    },

    onNewRoute(routeName) {
      this.attrs.goToRoute(routeName);
    }
  }
});
