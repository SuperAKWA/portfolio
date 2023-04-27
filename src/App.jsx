import { NavBar } from './NavBar'
import { Description } from './Description'
import { Skills } from './Skills'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
  return(
    <div>
      <NavBar />
      <br/>
      <Description/>
      <br/>
      <Skills/>
    </div>
  );
}

export default App;