import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setCurrentUser = (token, user) => {
    setToken(token);
    setUser(user);
  }
  useEffect((() => {
    if(Object.keys(user).length === 0) setIsLoggedIn(false);
    else setIsLoggedIn(true);
  }),[user])

  console.log(token, user);
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [us, setUs] = useState([]);
  // const sleep = (milliseconds) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliseconds));
  // };
  // const searchUsers = async (text) => {
  //   setIsLoading(true);
  //   const params = new URLSearchParams({
  //     q: text
  //   });
  //   const response = await fetch(`${api_url}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   });
  //   const {items} = await response.json();
  //   setUsers(items);
  //   await sleep(1000);
  //   setIsLoading(false);
  // };

  // const getUser = async (login) => {
  //   setIsLoading(true);
  //   const response = await fetch(`${api_url}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   });
  //   if(response.status === 404){
  //     window.location = '/notfound'
  //   }else{
  //   const data = await response.json();
  //   setUs(data);
  //   await sleep(600);
  //   setIsLoading(false);
  //   }
  // };
  return <UserContext.Provider value={{user, token, isLoggedIn, setCurrentUser, setUser, setToken}}>{children}</UserContext.Provider>;
};
export default UserContext;
