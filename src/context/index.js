import React, { useState, createContext, useReducer } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [count, setcount] = useState(0);

  const initialFood = {
    foods: [
      {
        foodName: 'Paket Holysteak 1',
        description: '1 Grain fed Sirlion Steak + 1 Ades',
        url: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 99000,
      },
      {
        foodName: 'Paket Tenderloin 1',
        description: '1 Grain fed Sirlion Steak + 1 Ades',
        url: 'https://images.unsplash.com/photo-1556269923-e4ef51d69638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1271&q=80',
        price: 99000,
      },
      {
        foodName: 'Paket Fried Chicken 1',
        description: '1 Grain fed Sirlion Steak + 1 Ades',
        url: 'https://images.unsplash.com/photo-1562967915-92ae0c320a01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        price: 99000,
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FOOD':
        return {
          foods: [...state.foods, action.payload],
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialFood);

  const AppProviderValue = {
    counter: [count, setcount],
    food: [state, dispatch],
  };

  return (
    <AppContext.Provider value={AppProviderValue}>
      {props.children}
    </AppContext.Provider>
  );
};
