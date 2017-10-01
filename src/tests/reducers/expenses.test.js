import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

// default state for expenses is an empty array

describe('Expenses Reducer test suite', () => {
  test('should set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
  });

  test('should remove an expense with correct id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]); 
  });

  test('should not remove an expense if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 321 };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses); 
  });

  test('should add an expense', () => {
    const expense = {
      id: 4,
      description: 'A new expense',
      note: '',
      amount: 15025,
      createdAt: 0
    };

    const action = { type: 'ADD_EXPENSE', expense};
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
  });

  test('should edit expense with valid id', () => {
    const action = { 
      type: 'EDIT_EXPENSE', 
      id: expenses[2].id, 
      updates: { note: 'Woolworths' }
    }

    const state = expensesReducer(expenses, action);

    expect(state[2].note).toBe('Woolworths'); 
  });

  test('should not edit expense with invalid id', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: 325,
      updates: { note: 'Woolworths' }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
  });

  test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1]]);
  });
});