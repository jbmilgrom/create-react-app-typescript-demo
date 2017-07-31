import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = shallow(<Hello name="Jonathan" />);
  expect(hello.find('.greeting').text()).toEqual('Hello, Jonathan!');
});

it('renders the correct text when an enthusiasm level is provided', () => {
  const hello = shallow(<Hello name="Pizza" enthusiasmLevel={5}/>);
  expect(hello.find('.greeting').text()).toEqual('Hello, Pizza!!!!!');
});

it('should throw an error for any enthusiasm <= 0', () => {
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={1}/>);
  }).not.toThrow();
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={0}/>);
  }).toThrow();
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={-9}/>);
  }).toThrow();
});

it('should throw  an error for any enthusiasm > 1000', () => {
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={1000}/>);
  }).not.toThrow();
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={10001}/>);
  }).toThrow();
  expect(() => {
    shallow(<Hello name="sure" enthusiasmLevel={10010}/>);
  }).toThrow();
});