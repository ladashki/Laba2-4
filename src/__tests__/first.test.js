import React from 'react';
import Info from "./components/info";
import QuoteShow from "./components/quote";
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
