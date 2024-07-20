import Ui from './ui';

// Constants for element locators on todo page
const LOCATORS = {
  TODO_ITEMS: '.todo-list li',
  NEW_TODO_INPUT: '[data-test=new-todo]',
  CLEAR_COMPLETED: 'Clear completed',
  ACTIVE_FILTER: 'Active',
  COMPLETED_FILTER: 'Completed',
};

// The TodoUi class contains methods for interacting with the UI of the todo page
// Here you can add any methods to work with UI elements

class TodoUi extends Ui {
  visit() {
    cy.visit('/todo');
  }

  addNewTodoItem(item) {
    cy.get(LOCATORS.NEW_TODO_INPUT).type(`${item}{enter}`);
  }

  checkTodoItem(item) {
    cy.contains(item).parent().find('input[type=checkbox]').check();
  }

  filterActive() {
    cy.contains(LOCATORS.ACTIVE_FILTER).click();
  }

  filterCompleted() {
    cy.contains(LOCATORS.COMPLETED_FILTER).click();
  }

  clearCompleted() {
    cy.contains(LOCATORS.CLEAR_COMPLETED).click();
  }

  assertTodoItemCount(count) {
    cy.get(LOCATORS.TODO_ITEMS).should('have.length', count);
  }

  assertTodoItemText(index, text) {
    cy.get(LOCATORS.TODO_ITEMS).eq(index).should('have.text', text);
  }

  assertTodoItemCompleted(item) {
    cy.contains(item).parents('li').should('have.class', 'completed');
  }

  assertTodoItemNotExist(item) {
    cy.contains(item).should('not.exist');
  }

  assertClearCompletedNotExist() {
    cy.contains(LOCATORS.CLEAR_COMPLETED).should('not.exist');
  }
}

export { TodoUi };
