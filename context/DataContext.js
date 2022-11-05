import React, {useState, useEffect} from 'react';

const defaultValue = {
  sentence: '',
  cards: [],
  activeSentence: [],
  lastCards: [],
};

const Context = React.createContext(defaultValue);

const Data = require('../assets/words.json');

const ContextProvider = ({ children }) => {
  const [sentence, setSentence] = React.useState('');
  const [cards, setCards] = React.useState([...Data.wyrazenia]);
  const [activeSentence, setActiveSentence] = React.useState([]);
  const [lastCards, setLastCards] = React.useState([]);

  const addToSentence = (word) => {
    setActiveSentence([...activeSentence, {...word, id: activeSentence.length + 1}])
  }

  const removeFromSentence = (id) => {
    setActiveSentence(activeSentence.filter((item) => item.id !== id))
  }

  useEffect(() => {
    setSentence(activeSentence.map((item) => item.pl).join(' '));
  }, [activeSentence])

  return (
    <Context.Provider value={{ sentence, cards, activeSentence, lastCards, addToSentence, removeFromSentence }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };