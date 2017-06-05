/**
 * controllers/application.js
 *
 * Controller to handle properties and actions for the static elements of the applications
 */
import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Controller.extend({
  /**
   * Inject the service to track the navbar state
   * @type {Object}
   */
  navbarState: inject.service(),

  navClass: computed('navbarState.isCollapsed', function() {
    const baseClass = ['header-sidebar'];

    if (this.get('navbarState').isCollapsed) {
      baseClass.push('header-sidebar--collapsed');
    } else {
      baseClass.push('header-sidebar--expanded');
    }

    return baseClass.join(' ');
  })
});
