import { login, logout } from '../../actions/auth';

describe('Auth action generator tests', () => {
  test('should setup login action object', () => {
    const uid = 'abcdefghijk';
    const action = login(uid);

    expect(action).toEqual({
      type: 'LOGIN',
      uid
    })
  });

  test('should setup logout action object', () => {
    const action = logout();

    expect(action).toEqual({
      type: 'LOGOUT'
    })
  });
});