import './App.css';

import Feed from './comps/feed/Feed';
import Stories from './comps/stories/Stories';
import LadoEsquerdo from './comps/ladoesquerdo/LadoEsquerdo';
import LadoDireito from './comps/ladodireito/LadoDireito';


function App() {
  return (
    <div className="App">
      <LadoEsquerdo />

      <div className='Centro'>
        <Stories />
        <Feed />
        <div className='Feed'></div>
      </div>

      <div className='LadoDireito'>
        <LadoDireito />
      </div>
    </div>
  );
}

export default App;
