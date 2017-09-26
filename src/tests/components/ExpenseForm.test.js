import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('ExpenseForm component test suite', () => {
  test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} buttonText='Update Expense' />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set description text on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set Note textarea on change', () => {
    const value = 'Changing Note textarea';
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);

    wrapper.find('textarea').simulate('change', {
      target: { value }
    });

    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set amount for valid input', () => {
    const value = '3000.25';
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  test('should not set amount for invalid input', () => {
    const value = '30.256';
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(
      <ExpenseForm
        buttonText='Update Expense'
        expense={expenses[0]}
        onSubmit={onSubmitSpy}
      />
    );

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt,
      note: expenses[0].note
    });
  });

  test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual (now);
  });

  test('should set focused onFocusChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm buttonText='Update Expense' />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
});
