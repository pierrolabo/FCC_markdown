import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Mardown Parser</h1>
      <main>
        <Editor />
        <Previewer />
      </main>
    </div>
  );
}

export default App;
