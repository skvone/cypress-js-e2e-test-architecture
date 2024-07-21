// Import the Ui base class
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
    cy.log('Visiting the todo page');
    cy.visit('/todo');
  }

  addNewTodoItem(item) {
    cy.log(`Adding new todo item: ${item}`);
    cy.get(LOCATORS.NEW_TODO_INPUT).type(`${item}{enter}`);
  }

  checkTodoItem(item) {
    cy.log(`Checking off todo item: ${item}`);
    cy.contains(item).parent().find('input[type=checkbox]').check();
  }

  filterActive() {
    cy.log('Filtering for active items');
    cy.contains(LOCATORS.ACTIVE_FILTER).click();
  }

  filterCompleted() {
    cy.log('Filtering for completed items');
    cy.contains(LOCATORS.COMPLETED_FILTER).click();
  }

  clearCompleted() {
    cy.log('Clearing completed items');
    cy.contains(LOCATORS.CLEAR_COMPLETED).click();
  }

  assertTodoItemCount(count) {
    cy.log(`Asserting the count of todo items to be: ${count}`);
    cy.get(LOCATORS.TODO_ITEMS).should('have.length', count);
  }

  assertTodoItemText(index, text) {
    cy.log(`Asserting the text of todo item at index ${index} to be: ${text}`);
    cy.get(LOCATORS.TODO_ITEMS).eq(index).should('have.text', text);
  }

  assertTodoItemCompleted(item) {
    cy.log(`Asserting the todo item "${item}" is completed`);
    cy.contains(item).parents('li').should('have.class', 'completed');
  }
}

export { TodoUi };

