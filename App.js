import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LandingPage from './landing-page';
import PostView from './post-view';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' component={LandingPage}></Route>
      <Route path='/postview' component={PostView}></Route>
      </Routes>Route
    </BrowserRouter>
  )
}

export default App;
