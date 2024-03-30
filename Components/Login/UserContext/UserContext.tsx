import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const loginUser = (userId) => {
    setUserId(userId);
  };

  return (
    <UserContext.Provider value={{ userId, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
