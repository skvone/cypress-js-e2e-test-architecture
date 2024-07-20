import { api, ui } from '../../src/test';

describe('Todo App Positive Tests', () => {
  beforeEach(() => {
    // Arrange
    ui.todo.visit();
  });

  it('should display two default todo items', () => {
    // Assert
    ui.todo.assertTodoItemCount(2);
    ui.todo.assertTodoItemText(0, 'Pay electric bill');
    ui.todo.assertTodoItemText(1, 'Walk the dog');
  });

  it('should add a new todo item', () => {
    const newItem = 'Feed the cat';

    // Act
    ui.todo.addNewTodoItem(newItem);
    // Assert
    ui.todo.assertTodoItemCount(3);
    ui.todo.assertTodoItemText(2, newItem);
  });

  it('should check off an item as completed', () => {
    // Act
    ui.todo.checkTodoItem('Pay electric bill');
    // Assert
    ui.todo.assertTodoItemCompleted('Pay electric bill');
  });

  context('with a checked task', () => {
    beforeEach(() => {
      // Arrange
      ui.todo.checkTodoItem('Pay electric bill');
    });

    it('should filter for uncompleted tasks', () => {
      // Act
      ui.todo.filterActive();
      // Assert
      ui.todo.assertTodoItemCount(1);
      ui.todo.assertTodoItemText(0, 'Walk the dog');
    });

    it('should filter for completed tasks', () => {
      // Act
      ui.todo.filterCompleted();
      // Assert
      ui.todo.assertTodoItemCount(1);
      ui.todo.assertTodoItemText(0, 'Pay electric bill');
    });

    it('should delete all completed tasks', () => {
      // Act
      ui.todo.clearCompleted();
      // Assert
      ui.todo.assertTodoItemCount(1);
    });
  });

  it('should fetch todo items via API and check the page status 200', () => {
    // Act & Assert
    api.todo.assertGetTodoPageStatus(200);
  });
});
