export const DayList = function ({arr}) {
  return (
    <div>
      <ul className="list-group">{arr.map((dayName,index) => 
        <li key={index} className="list-group-item">{dayName}</li>
        )}
      </ul>
    </div>
  );
};
