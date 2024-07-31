// conditional rendering in react
import UserGreeting from "./UserGreeting.jsx"
function App() { 

return (
  <>
  <UserGreeting isLoggedIn={true} username="brocode" />
  </>
)
}

export default App
