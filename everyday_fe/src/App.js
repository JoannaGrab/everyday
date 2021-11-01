import './App.css';
import Receipt from './components/Receipt';

function App() {
  const tags = ["śniadanie", "fit"];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Receipt title="Owsianka" tags={tags}/>
        </p>
      </header>
    </div>
  );
}


export default App;
