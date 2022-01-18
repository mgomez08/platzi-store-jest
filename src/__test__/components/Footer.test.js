import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
  test('Render copyright', () => {
    expect(footer.find('.Footer-copy').text()).toEqual(
      'Todos los Izquierdos Reservados'
    );
  });
});

describe('Footer with snapshot', () => {
  test('Comprobar la ui del Fotter', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
