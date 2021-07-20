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
              title = "First Link"
              content ="Content"
              someProp={someProp}
            />
            <NavLinks title = "Hi"/>
        </nav>
    )
}