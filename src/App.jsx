import NavBar from "./components/ui/navBar/NavBar";
import SideBar from "./components/ui/sideBar/SideBar";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="w-screen h-screen text-gray-800 bg-slate-400 grid grid-rows-[min-content_1fr]">
      <NavBar />
      <div className="grid grid-cols-[min-content_1fr]">
      <SideBar />
      <HomePage />
      </div>
    </div>
  )
}

export default App
