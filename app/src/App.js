import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
