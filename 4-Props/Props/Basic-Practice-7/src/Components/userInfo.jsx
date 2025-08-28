function UserInfo({arr}) {
  return (
    <div>
      <ul className="list-group">{arr.map((name,index) => 
        <li  key={index} className="list-group-item">{name}</li>
        )}
      </ul>
    </div>
  );
}

export default UserInfo;
