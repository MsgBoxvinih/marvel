import Bottomdark from './components/Bottomlight/Bottomlight';
import Searchinput from './components/Search';
import Logo from './components/Logo';
import MainText from './components/MainText';
import Theme from './components/Theme'


function Darkpage() {
  return (
    <div className="darkpage">
      <Bottomdark/>
      <Logo/>
      <Searchinput/>
      <MainText/>
      <Theme/>
    </div>
  );
}

export default Darkpage;