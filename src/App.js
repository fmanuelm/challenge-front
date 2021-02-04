import { Fragment, useMemo, useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import { UserContext } from "./UserContext";


function App() {

  const [text, setText] = useState(); // hooks para manejar el estado
  const invertText = useMemo(() => ({ text, setText }), [text, setText]);

  return (
    <Fragment>
      <UserContext.Provider value={invertText}>
        <Header/>
        <Body/>
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
