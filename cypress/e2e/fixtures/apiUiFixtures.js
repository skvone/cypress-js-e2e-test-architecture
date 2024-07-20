// cypress/e2e/fixtures/apiUiFixtures.js
import { Ui } from '../ui/ui';
import { TodoApi } from '../api/todoApi';
import { TodoUi } from '../ui/todoUi';

class ApiUiFixtures {
  constructor() {
    this.api = {
      todo: new TodoApi(),
    };
    this.ui = {
      todo: new TodoUi(),
    };
  }
}

const apiUiFixtures = new ApiUiFixtures();
export { apiUiFixtures };
