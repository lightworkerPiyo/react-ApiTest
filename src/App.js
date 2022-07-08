import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    // use jSONPlaceholder
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1 user</button>
    </div>
  );
}
