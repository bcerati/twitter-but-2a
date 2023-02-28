import { useState } from 'react';
import Content from './components/Content/Content';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';

import './assets/css/app.css';

function App() {
  return (
    <>
      <LeftBar />
      <Content />
      <RightBar />
    </>
  );
}

export default App;
