class TodoApi {
  assertGetTodoPageStatus() {
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
