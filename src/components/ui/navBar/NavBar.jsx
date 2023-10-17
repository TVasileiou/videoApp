import DropDown from "./DropDown"
import SearchBar from "./SearchBar"
import AccountSection from "./AccountSection"

const NavBar = () => {
  return (
    <div className="row-start-1 row-end-2 h-20 bg-red-500 grid grid-cols-[min-content_1fr_min-content] items-center justify-items-center">
      <DropDown />
      <SearchBar />
      <AccountSection />
    </div>
  )
}

export default NavBar