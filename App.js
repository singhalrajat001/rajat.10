import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import About from './componenets/About';

function App() {

  return (
  <>
<Navbar/>
<div className="container">
<About/>
<TextForm heading = "Text Editor"/>
</div>
  </>
  );
}
export default App;
