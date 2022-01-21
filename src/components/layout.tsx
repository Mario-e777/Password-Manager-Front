import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from 'react-query';

/* import Header from "./header"; */
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
        <div className="page-background" >
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
