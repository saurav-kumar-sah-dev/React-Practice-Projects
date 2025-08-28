import ErrorMessage from "./errorMessage";

function UserInfo({arr}) {
  return (
    <div>
      <ul className="list-group">{arr.map((name,index) => 
        <li  key={index} className="list-group-item">{name}</li>
        )}
      </ul>

      <ErrorMessage use={arr}></ErrorMessage>
    </div>
  );
}

export default UserInfo;
