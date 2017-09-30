import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  addExpense, 
  startAddExpense, 
  editExpense, 
  removeExpense 
} from '../../actions/expenses';

import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Expense action generator tests', () => {
  test('should setup remove expense action object',  () => {
    const action = removeExpense({ id: '123abc'});

    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
  });

  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'Add new note' });

    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        note: 'Add new note'
      }
    })
  });

  test('should setup add expense action object - with provided values', () => {
    const expenseData = {
      description: 'Water Bill',
      note: 'Note from Add',
      amount: 10000,
      createdAt: 50000000
    }

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    })
  });

  test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'mouse',
      note: 'Test start add expense',
      amount: 3000,
      createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
          
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
  
  test('should add expense, with defaults, to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }

    store.dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults
          }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
  });

  // test('should setup add expense action object - with default values', () => {
  //   const action = startAddExpense();

  //   expect(action).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       id: expect.any(String),
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0
  //     }
  //   })
  // })
});