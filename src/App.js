import { Bottomlight } from './components/Bottomlight/Bottomlight';
import Searchinput from './components/Search';
import Logo from './components/Logo';
import MainText from './components/MainText';
import Theme from './components/Theme'


function App() {
  return (
    <div className="App">
      <Bottomlight/>
      <Logo/>
      <Searchinput/>
      <MainText/>
      <Theme/>
    </div>
  );
}

export default App;
