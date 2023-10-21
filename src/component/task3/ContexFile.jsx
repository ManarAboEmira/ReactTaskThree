import React, { createContext, Component } from 'react';

const MyContext = createContext();

const MyProvider = MyContext.Provider;
const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer, MyContext };