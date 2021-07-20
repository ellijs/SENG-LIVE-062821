<<<<<<< HEAD
function App() {
  return (
    <div>
          <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy-header"
        />
      </div>
    
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
    
          <input
            type="text"
            name="name"
            value=""
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            value=""
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create Toy"
            className="submit"
          />
        </form>
      </div>
      <p style={{textAlign:"center"}}>
        Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
      </p>
    
      <div id="toy-collection"></div>
      <script type="text/javascript" src="src/index.js"></script>
    </div>
    )
}

=======
>>>>>>> refs/remotes/origin/main
/* 
Outline
- Take HTML from Toy Tales lab and turn it into JSX
  - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
  - What needs to change? What's the same?
- Refactor HTML into separate components
- JSX Syntax
- Pass in props
Exercise
- create a ToyCard component
- start by hard-coding the JSX in your component return statement
- then use props to make your component reusable
- you can copy/paste data from the toys.js file as props
- as a bonus, try importing data from the toys.js file
*/

// Import Custom Components
import Header from './components/Header';
import ToyCard from './components/ToyCard';

// Import Array of Toy Objects from "toys.js"
import MyToys from './toys';

// Root App Component Function
function App() {
  return (
    <div>
      
      {/* Header Component */}
      <Header />

      {/* Container Component (TBD) */}
      <div className="container">
        
        {/* AddToyForm Component (TBD) */}
        <form className="add-toy-form">
          <h3>Create a toy!</h3>

          {/* FormInput Component (TBD) */}
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />

          {/* FormInput Component (TBD) */}
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />

          {/* FormInput Component (TBD) */}
          <input
            type="submit"
            name="submit"
            value="Create Toy"
            className="submit"
          />
        </form>
      </div>


      {/* Hero Component (TBD) */}
      <p style={{textAlign: 'center'}}>
        Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
      </p>

      {/* ToyCollection Component (TBD) */}
      <div id="toy-collection">
        
        {/* Map over Array of Toy Objects imported from "toys.js" */}
        {MyToys.map(toy => {
          
          // For each Toy object, create a ToyCard Component and pass
          // the Toy object as a prop, "toy"
          return (
            <ToyCard key={toy.id} toy={toy}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
