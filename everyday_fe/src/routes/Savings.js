export default function Savings() {
    fetch('http://127.0.0.1:3001/finance/balance?from=2021-12-09 00:00:00&to=2012-12-10 00:00:00')
  .then(response => response.json())
  .then(data => console.log(data));

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Savings</h2>
        <p>Here will be chart and summary.</p>
      </main>
    );
  }
  
