import moment from 'moment';

import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

describe('Selectors test suite', () => {
  test('should filter by text value', () => {
    const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]); 
  });

  // Dates are selected where startDate isSameOrBefore
  // ie: date cannot be in the past
  // effectively greater than or equal to - confusing
  test('should filter by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]);
  });

  // Dates are selected where startDate isSameOrAfter
  // ie: date cannot be in the future
  // effectively less than or equal to - confusing
  test('should filter by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
  });

  test('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };

    // Dates are ordered from latest to earliest
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  test('should sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
  });
});