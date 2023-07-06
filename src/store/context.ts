import React, { createContext } from 'react';

interface MyContextType {
  // Define the properties and methods of your context
  global: {};
  setGlobal: any
}

export const context = createContext<MyContextType | any >(undefined);
export const Provider : any = context.Provider ;
