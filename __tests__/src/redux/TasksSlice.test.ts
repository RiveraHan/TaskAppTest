import tasksReducer, { addTask, editTask, deleteTask } from '../../../src/redux/tasksSlice';

describe('tasksSlice', () => {
  const initialState = { tasks: [] };

  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addTask', () => {
    const actual = tasksReducer(initialState, addTask('Test Task'));
    expect(actual.tasks.length).toEqual(1);
    expect(actual.tasks[0].description).toEqual('Test Task');
  });

  it('should handle editTask', () => {
    const stateWithTask = { tasks: [{ id: '1', description: 'Initial Task' }] };
    const actual = tasksReducer(stateWithTask, editTask({ id: '1', description: 'Updated Task' }));
    expect(actual.tasks[0].description).toEqual('Updated Task');
  });

  it('should handle deleteTask', () => {
    const stateWithTask = { tasks: [{ id: '1', description: 'Task to delete' }] };
    const actual = tasksReducer(stateWithTask, deleteTask('1'));
    expect(actual.tasks.length).toEqual(0);
  });
});
