import moment from 'moment';

import filtersReducer from '../../reducers/filters';

describe('Filters Reducer test suite', () => {
  test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });

  test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
  });

  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    };

    const action = { type: 'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
  });

  test('should set text filter to provided value', () => {
    const text = 'search me';
    const action = { type: 'SET_TEXT_FILTER', text  };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
  });

  test('should set startDate to provided value', () => {
    const startDate = moment().startOf('month');
    const action = { type: 'SET_START_DATE', startDate  };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
  });

  test('should set endDate to provided value', () => {
    const endDate = moment().endOf('month');
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
  });
});