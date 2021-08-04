import './App.css';
import Header from "./components/header/Header";
import Page from "./components/page/Page";
import {Switch,Route,BrowserRouter} from 'react-router-dom'


const dataList = {
  nav: [
    {link: '/page1',text: "menuItem1"},
    {link: '/page2',text: "menuItem2"},
    {link: '/page3',text: "menuItem3"},
  ]
}



function App() {
  return (


    <div className="App">
        <BrowserRouter>
        <Header data={dataList} />
        <div className="mainContent">
            <Switch>
                <Route exact path='/page1' render={()=>(<Page namePage={'Page1'}/>)} />
                <Route path='/page2' render={()=>(<Page namePage={'Page2'} />)} />
                <Route path='/page3' render={()=>(<Page namePage={'Page3'} />)} />
            </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
