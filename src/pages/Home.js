import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import UserCard from "../components/UserCard";
// import NavBar from "../components/NavBar";

function Home() {

  const users = useOutletContext();
  const userList = users.map(user => <UserCard key={user.id} user={user}/>);

  // const [users, setUsers] = useState([]);

  // useEffect(() =>{
  //   fetch("http://localhost:4000/users")
  //     .then(r => r.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error(error));
  // }, []);
  
  // const userList = users.map(user =>{
  //   return <UserCard key={user.id} user={user}/>;
  // });

  return (
    <>
      {/* <header>
        <NavBar />
      </header> */}
      <main>
        <h1>Home!</h1>
        <Outlet context={users}/>
        {userList}
      </main>
    </>
  );
};

export default Home;