import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title ="title" content="content" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card name="Card" title="title"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(<Card name="Card" title="This is a card"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});