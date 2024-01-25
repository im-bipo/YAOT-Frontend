import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("yaot-user-details")) || { login: false }
  );

  useEffect(() => {
    console.log(user);
    localStorage.setItem("yaot-user-details", JSON.stringify(user));
    console.log("local data updated");
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
