import { useApi } from "hooks/useApi";
import { useEffect, useState } from "react";
import { User } from "types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: { children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');

      if(storageData) {
        const data = await api.validateToken(storageData);
        if(data.username) {
          const user = {
            username: data.username,
            token: storageData
          }
          setUser(user);
        }
      }
    }
    validateToken();
  }, [api]);

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password);

    if(data.username && data.token) {
      const user = {
        username: data.username,
        token: data.token
      }
      setUser(user);
      setToken(data.token);
      return true;
    } 

    return false;
  }

  const signout = async () => {
    await api.logout();
    setUser(null);
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}