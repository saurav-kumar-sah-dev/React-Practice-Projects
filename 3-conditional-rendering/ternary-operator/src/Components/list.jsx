function Arr() {

  // let arr= [];
  let arr = ["Ram", "Shyam", "Mohen", "Rakesh", "Ramesh"];
 
  let EmptyArray= (arr.length===0) ? 'Empty Array' : null;
 
  return (
    <>
    
     {EmptyArray}

    <ul className="list-group">{arr.map((name,index) =>
  <li key={index} className="list-group-item">{name}</li>
  )}
</ul>
    </>
  )
}

export default Arr;