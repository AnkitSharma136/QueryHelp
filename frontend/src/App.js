import React, { useEffect } from "react";
import './App.css';
import Quora from './Components/Quora';
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./feature/userSlice";
import Login from "./Components/auth/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {    //Firebase Authentication:
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {/* <Quora /> */}
      {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;
