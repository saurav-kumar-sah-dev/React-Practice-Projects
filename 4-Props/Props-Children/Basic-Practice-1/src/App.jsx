import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./Components/userInfo";
import ErrorMessage from "./Components/errorMessage";
import Container from "./Components/container";
function App() {
  // const arr=[]
  const arr = ["Saurav", "Gourav", "Pintu", "Ram", "Mohan"];

  return (
    <>
      <Container>
        <UserInfo arr={arr}></UserInfo>
        <ErrorMessage arr={arr}></ErrorMessage>
      </Container>

      <Container>
         <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam, ratione quas animi libero nam saepe totam a numquam perspiciatis rerum enim quos illo ea beatae pariatur laudantium accusamus ipsam, quia, velit nihil porro? Similique consectetur, sequi vitae vel in quos, molestiae deserunt et fugiat dolores nemo blanditiis quam ad.</article>
      </Container>
    </>
  );
}

export default App;
