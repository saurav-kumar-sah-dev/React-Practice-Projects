function UserInfo({obj}) {
  // console.log(obj)
  return (
    <div>

      <h3>User informatio </h3>

      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
      <p>{obj.detailsInfo.state}</p>
      

    </div>
  )
}

export default UserInfo;