function NavLinks({ title, content, someProp}) {
    return(
       <> 
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{someProp}</p>
       </>
    )
}

export default NavLinks