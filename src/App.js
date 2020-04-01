import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  state ={
    lists: STORE.lists,
    cards: STORE.allCards
  }
  //random card button function
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  handleClickRandom = event => {
  const random = this.newRandomCard();
    const randomId = random.id;
    const newLists = this.state.lists.map((currentList) => {
      if (event.target.id === currentList.id){
        const newArray = currentList.cardIds.concat(random.id)
        currentList.cardIds = newArray
      }
      return currentList
    })
    const newAllCards = this.state.cards;
    newAllCards[randomId] = random;
    this.setState({
        lists: newLists,
        cards: newAllCards
    })
  }
  //handleCardDelete
  handleClickDelete = event =>{
    console.log('deleted')
  }
  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              id = {list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.cards[id])}
              handleClick = {this.handleClickRandom}
              handleDelete = {this.handleClickDelete}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
