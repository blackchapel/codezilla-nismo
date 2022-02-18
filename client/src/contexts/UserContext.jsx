import { createContext, useState, useEffect, useCallback, useMemo } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setCurrentUser = (receivedToken, receivedUser) => {
    setToken(receivedToken);
    setUser(receivedUser);
  }
  useEffect((() => {
    setUser(localStorage.getItem("user"));
    setToken(localStorage.getItem("token"));
    if(localStorage.getItem("user") != "") {setIsLoggedIn(true)}
    else {setIsLoggedIn(false)};
    
  }),[])

  // const signout = useCallback(() => {
  //   setUser(null);
  // }, []);


  

  // memoize the full context value
  // const contextValue = useMemo(() => ({
  //   user,
  //   signout
  // }), [user, signout])

  
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
  return <UserContext.Provider value={{user, token, isLoggedIn, setCurrentUser, setUser, setToken, setIsLoggedIn}}>{children}</UserContext.Provider>;
};
export default UserContext;
