import Content from './components/Content/Content';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';

import './assets/css/app.css';
import { getAuthenticatedUser } from './services/users';
import { UserContext } from './contexts/UserContext';

function App() {
  const user = getAuthenticatedUser();

  if (user === null) {
    //TODO: redirect to the login page!
    return;
  }

  return (
    <UserContext.Provider value={user}>
      <LeftBar />
      <Content />
      <RightBar />
    </UserContext.Provider>
  );
}

export default App;
