import moment from 'moment';

import { 
  setTextFilter, 
  setSortByDate, 
  setSortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

describe('Expense action generator tests', () => {
  test('should setup text filter action generator with supplied value', () => {
    const action = setTextFilter('Water');

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'Water'
    })
  });

  test('should setup text filter action generator with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    })
  });

  test('should setup sortByDate filter action generator', () => {
    expect(setSortByDate()).toEqual({ type: 'SORT_BY_DATE' });
  });

  test('should setup sortByAmount filter action generator', () => {
    expect(setSortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
  });

  test('should setup setStartDate filter action generator', () => {
    const action = setStartDate(moment(500000));

    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(500000)
    })
  });

  test('should setup setStartDate filter action generator', () => {
    const action = setEndDate(moment(555000));

    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(555000)
    })
  });
});