export function initialize(container, application) {
  application.inject('route', 'api', 'service:api');
  application.inject('component', 'api', 'service:api');
}

export default {
  name: 'api',
  initialize: initialize
};
