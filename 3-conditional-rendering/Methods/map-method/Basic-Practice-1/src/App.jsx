import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  let arr = ["Ram", "Shyam", "Mohen", "Rakesh", "Ramesh"];
  
  return (
    <>
    
      <ul class="list-group">{arr.map((name,index) => 
        <li key={index} class="list-group-item">{name}</li>
        )}
        </ul>
    
    </>
  );
}

export default App;
