import authReducer from '../../reducers/auth';

describe('Auth Reducer test suite', () => {
  test('should set uid for login', () => {
    const action = { type: 'LOGIN', uid: '135abc678hij' };
    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid); 
  });

  test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: '123abc'}, action);

    expect(state).toEqual({});
  });
});
