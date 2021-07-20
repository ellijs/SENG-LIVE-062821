import NavLinks from '../Components/NavLinks'

function NavBar ({ isLoggedIn, someProp }) {

    return(
        <nav>
            {/* if we have more JSX..
            {
            isLoggedIn? <p>Ligged In</p> : <p>Logged Out</p>
            }
            
            if not...use this one */}
            <p>{ isLoggedIn ? "Logged In" : "Logged Out" }</p>
            <hr />
            <NavLinks 
              title = "I am from NavLink"
              content ="But value passed down from NavBar"
              someProp={someProp}
            />
            <NavLinks title = "Hi, different NavLink"/>
        </nav>
    )
}

export default NavBar