// Import the Api base class
import Api from './api';

class TodoApi extends Api {
  assertGetTodoPageStatus() {
    cy.log('Fetching todo page and asserting status 200');
    return cy.request({
      method: 'GET',
      url: '/todo',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response;
    });
  }
}

export { TodoApi };
