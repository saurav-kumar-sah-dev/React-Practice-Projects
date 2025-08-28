import "bootstrap/dist/css/bootstrap.min.css";
import ChildrenComponent from "./Components/childrenComponent";
import { Addbutton } from "./Components/addButton";
import ErrorMessage from "./Components/errorMessage";
import { DayList } from "./Components/dayList";


function App() {

  function buttonFun() {
    alert('Welcome');
    console.log('Hello, How are you.')
  }

  let dayName=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  return (
    <>

    <ChildrenComponent>

    <Addbutton  fun={buttonFun} />

    </ChildrenComponent>

    <ChildrenComponent>

      <DayList arr={dayName}/>
      <ErrorMessage arr={dayName} />

    </ChildrenComponent>

    <ChildrenComponent>

      <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aspernatur sapiente fuga veritatis in adipisci sunt labore similique alias deleniti ullam, atque repellendus odit laborum. Numquam minus doloribus facere saepe deserunt temporibus suscipit unde, expedita itaque fuga eos hic quasi, velit nam debitis quod? Sunt, molestias? Ut veniam rerum quasi optio dolores doloremque quae atque, deserunt aperiam autem expedita eaque possimus error dolor rem debitis assumenda voluptatibus vel temporibus id numquam vitae architecto voluptatem. Possimus facere quam velit quaerat sapiente fugit quibusdam, rem deserunt praesentium quod nulla excepturi commodi porro ut quae cumque dolores assumenda nihil officiis. Dicta, aliquam facilis.</article>

    </ChildrenComponent>
    </>
  )
}

export default App;