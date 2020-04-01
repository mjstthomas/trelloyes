import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import Card from './Card'
import props from './App'
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header = "this is a header" card = {card} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List name="List" header="this is a header" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(<List name="List" header="this is a header" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});