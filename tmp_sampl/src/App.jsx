import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const content = [
    {title: "html", text: "html"},
    { title: "css", text: "css"},
    {title: "js", text: "js"}
]

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(null);
  return (
    <>
        <div className={"Header"}>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>

        <div className={"Main"}>
            <p className={"content"}>
            <section>
            <ul>
            {content.map((item, index) => (
                <li
                    key={item.title}
                    onClick={() => setActive(index)}
                    className={index === active ? "active" : null}
                >
                    <h3>{item.title}</h3>
                    <div className="content">{item.text}</div>
                </li>
            ))}
            </ul>
            </section>
            </p>
        </div>
    </>
  )
}

export default App
