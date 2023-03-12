import Content from './components/Content/Content';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';

import './assets/css/app.css';
import { getAuthenticatedUser } from './services/users';
import { UserContext } from './contexts/UserContext';

function App() {
  const authenticatedUser = getAuthenticatedUser();

  if (authenticatedUser === null) {
    // TODO: Redirect to login page
  }

  return (
    <UserContext.Provider value={authenticatedUser!}>
      <LeftBar />
      <Content />
      <RightBar />
    </UserContext.Provider>
  );
}

export default App;
