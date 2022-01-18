import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Return initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Add to Cart reducer', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expectedState = {
      cart: [payload],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
  test('Remove to Cart reducer', () => {
    const cartItem = ProductMock;
    const initialState = {
      cart: [cartItem],
    };
    const payload = cartItem;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expectedState = {
      cart: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
