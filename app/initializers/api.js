export function initialize(application) {
  application.inject('route', 'api', 'service:api');
  application.inject('component', 'api', 'service:api');
  application.inject('controller', 'api', 'service:api');
}

export default {
  name: 'api',
  initialize: initialize
};
