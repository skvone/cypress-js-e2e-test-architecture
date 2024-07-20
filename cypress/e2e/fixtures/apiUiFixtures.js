import { TodoApi } from '../api/todoApi';
import { TodoUi } from '../ui/todoUi';

class ApiUiFixtures {
  constructor() {
    this.api = {
      todo: new TodoApi(), // You can add other API objects here
    };
    this.ui = {
      todo: new TodoUi(), // You can add other UI objects here
    };
  }
}

const apiUiFixtures = new ApiUiFixtures();
export { apiUiFixtures };
