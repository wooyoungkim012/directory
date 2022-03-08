import "./NavBar.css"

function NavBar(props) {
    // const [name, setName] = useState('Set Username:')
    return (
        <navbar>
        <ul id="logo-menu">
          <li id="moveio">iatri</li>
        </ul>
        <ul id="menu-items">
          <li id="challenge_btn">Search</li>
          <li id="classes_btn">Bookmarks</li>
          <li id="leaderboard_btn">About</li>
        </ul>
      </navbar>
    )
}

export default NavBar