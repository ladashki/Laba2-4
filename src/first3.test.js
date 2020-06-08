import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
  const context = {
  fetchQuote: jest.fn().mockResolvedValue({ quote: 'test' }),
  setState: jest.fn(),
}

it('renders without crashing', () => {

const event = { preventDefault: jest.fn() };
const app = new App();
app.getQuote.call(context, event);

expect(event.preventDefault).toHaveBeenCalled();
});