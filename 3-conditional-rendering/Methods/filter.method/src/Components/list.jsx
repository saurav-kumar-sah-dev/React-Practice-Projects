function NumberList() {

  let number = [1,8,6,17,23,14,39,80,100]
 
  let result = number.filter(val => {
    if(val%2 == 0) {
      return val;
    }
  })

  return (
    <>
    <ul className="list-group">{result.map((name,index) =>
  <li key={index} className="list-group-item">{name}</li>
  )}
</ul>
    </>
  )
}

export default NumberList;