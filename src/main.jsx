import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>
    Hello World!!</h1>
    <h3>
    <p>
      This is a React application using Vite.
    </p>
    </h3>
    <center>
    <table border="2px">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
        </tr>
      </tbody>
    </table>
    </center>
  </StrictMode>,
)
