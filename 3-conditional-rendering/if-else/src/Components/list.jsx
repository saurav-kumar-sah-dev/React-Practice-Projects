function NumberList() {

  // let number= [];
  let number = [1,8,6,17,23,14,39,80,100]
 
  if(number.length ===0) {
    return 'here not any number persent';
  }
  return (
    <>
    <ul className="list-group">{number.map((name,index) =>
  <li key={index} className="list-group-item">{name}</li>
  )}
</ul>
    </>
  )
}

export default NumberList;