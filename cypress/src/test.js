// Import an apiUiFixtures object that links API and UI objects for tests
import { apiUiFixtures } from '../e2e/fixtures/apiUiFixtures';

// Destructuring api and ui objects from apiUiFixtures
const { ui,api } = apiUiFixtures;

// Export api and ui objects for use in tests
export { ui,api };
