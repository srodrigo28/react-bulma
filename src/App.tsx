import { AppRouter } from "./services/routes"

function App() {

  return (
    <div className="app">
        <section className="main-content columns is-fullheight">
          <AppRouter />
        </section>
    </div>
  )
}

export default App
