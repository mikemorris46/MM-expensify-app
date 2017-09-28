import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('Selector selectExpensesTotal test suite', () => {
  test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
  });

  test('should correctly sum a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]); // 450
    expect(res).toBe(450);
  });

  test('should correctly sum multiple expenses', () => {
    const res = selectExpensesTotal(expenses); // 1725
    expect(res).toBe(1725);
  });
});