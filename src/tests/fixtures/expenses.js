import moment from 'moment';

// Set up expenses array for testing

export default [
  {
    id: '1',
    description: 'Coffee',
    note: 'Dome, Wanneroo',
    amount: 450,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Pizza',
    note: 'Dominos',
    amount: 850,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Tea bags',
    note: 'Coles',
    amount: 425,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]