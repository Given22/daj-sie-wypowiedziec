import React, {useState, useEffect} from 'react';

import 'react-native-get-random-values'
import urid from 'urid';

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
  const [cards, setCards] = React.useState([...Data.słowa.map((item) => ({...item, id: urid()}))]);
  const [activeSentence, setActiveSentence] = React.useState([]);
  const [lastCards, setLastCards] = React.useState([]);

  const debug = () => {
    console.log('sentence', sentence);
    console.log('cards', cards);
    console.log('activeSentence', activeSentence);
    console.log('lastCards', lastCards);
  };

  const addToSentence = (word) => {
    setActiveSentence(prev => {
      const newActiveSentence = [...prev, {...word, id: urid()}];
      return [...newActiveSentence]
    });
  }
  
  const removeFromSentence = (id) => {
    setActiveSentence(activeSentence.filter((item) => item.id !== id))
  }
  
  const addToLast = (word) => {
    if(lastCards.find(item => item.id === id)) return
    setLastCards(prev => {
      const newLastCards = [...prev, word]
      return [...newLastCards]
    })
  }

  const removeAll = () => {
    setActiveSentence([])
  }

  useEffect(() => {
    // setSentence(activeSentence.map((item) => item.pl).join(' '));
    setSentence(prev => {
      const newSentence = activeSentence.map((item) => item.pl).join(' ');
      return newSentence;
    });
  }, [activeSentence])

  return (
    <Context.Provider value={{ sentence, cards, activeSentence, lastCards, addToSentence, removeFromSentence, addToLast, removeAll, debug }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };