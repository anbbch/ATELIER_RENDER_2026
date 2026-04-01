import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const API_URL = "https://flask-render-iac-anbbch.onrender.com";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Plateforme de développement</h1>
      <p>Backend : <a href={API_URL}>{API_URL}</a></p>
      <h2>Utilisateurs depuis PostgreSQL</h2>
      {error && <p style={{color:"red"}}>Erreur : {error}</p>}
      <ul>
        {users.map((u, i) => <li key={i}>{u[1]}</li>)}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
