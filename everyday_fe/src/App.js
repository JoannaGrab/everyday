import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  const tags = ["śniadanie", "fit"];

  return (
    <div className="App">
      <h1>Everyday</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/finance">Finance</Link> |{" "}
        <Link to="/savings">Savings</Link> |{" "}
        <Link to="/recipes">Recipes</Link>
      </nav>
      <Outlet />
    </div>


  );
}


export default App;
