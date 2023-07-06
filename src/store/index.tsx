import React, { useState } from 'react';
import { Provider } from './context';

interface MyComponentProps {
    // Define your props here
    children : any
  }

const ContextProvider: React.FC<MyComponentProps> = ({ children } : any) => {
  const [global, setGlobal] = useState<{}>({
       token : "",
       provider : "",
       name : "",
       email : "",
       profile_pic : ""
  });

  return (
    <Provider value={{ global, setGlobal }}>
      {children}
    </Provider>
  );
};


export default ContextProvider