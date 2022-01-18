import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from 'react-query';

import Header from "./header";
import "./layout.css";

const queryClient = new QueryClient();

const LayoutContext = React.createContext<{ handleNatification?: Function }>({});

const Layout = ({ children }) => {
  const [notification, setNotification] = useState<JSX.Element>();

  function handleNatification(comp: JSX.Element) {
    setNotification(() => comp);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContext.Provider value={{ handleNatification }}>
        {notification}
        <div style={{ backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' }} >
          {/* <Header /> */}
          <main>{children}</main>
          {/* <footer></footer> */}
        </div>
      </LayoutContext.Provider>
    </QueryClientProvider>
  );
};

export default Layout;
export { LayoutContext };
