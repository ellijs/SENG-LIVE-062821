import { useState } from 'react'

function PaintingForm(){
// What hook will we use to manage ?

    // Create a state (formData) to manage all of our controlled input
    const [ formData, setFormData ]= useState({
        imgUrl : "",
        title: "",
        name: "",
        date: "",
        width: "",
        height: ""
    })

    // Create a callback function to manage the onChange behavior for each of our controlled inputs
    function manageFormData(e) {
        let key = e.target.name
        let value = e.target.value
        
        // formData = { firstName: "Luois", lastName: "Medina" }
        setFormData({
            ...formData,
            [key]: value
        })
    }
    // Capture all submitted data and store into a separate state (submittedData)
    const [ submittedData, setSubmittedData ] = useState([])
    // Create a callback to handle onSubmit behavior for our controlled form
    function handleFormSubmit (e) {
        e.preventDefault();
        // capture submitted data ( that we want )
        const newFormData = { imgUrl: formData.imgUrl, title: formData.title }

        // Merge submitted data with existing form submissions
        setSubmittedData([ ...submittedData, newFormData ])
        // clear out input values upon form submission
        setFormData({
            imgUrl : "",
            title: "",
            name: "",
            date: "",
            width: "",
            height: ""
        })
      
    }
    // return JSX that will contain our painting Title and ArtistName
    const renderData = submittedData.map((data)=> {
        return(
            <div key={data.name} style={{ border: "1px solid black"}}>
                <p>Title: {data.title}</p>
                <p>Image: {data.imgUrl}</p>
            </div>
        )
    })

    return (
        <>
        <div>
            <h1> Add a new Painting</h1>
            <form onSubmit={handleFormSubmit}>
                <input onChange={manageFormData} type="text" name="imgUrl" value={formData.imgUrl} placeholder="ImgURL" /> <br/>
                <input onChange={manageFormData} type="text" name="title" value={formData.title} placeholder="Title"/><br/>
                <input onChange={manageFormData} type="text" name="name" value={formData.name} placeholder="Artist Name"/><br/>
                <input onChange={manageFormData} type="text" name="date" value={formData.date} placeholder="date"/><br/>
                <input onChange={manageFormData} type="text" name="width" value={formData.width} placeholder="width"/><br/>
                <input onChange={manageFormData} type="text" name="height" value={formData.height} placeholder="height"/><br/>

                <input type="submit" value="add new painting"/>
            </form>
        </div>
        <div>
            {renderData}          
        </div>
        </>
    );
}

export default PaintingForm;
