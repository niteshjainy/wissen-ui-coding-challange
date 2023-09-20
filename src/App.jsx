import { useState } from "react";
import "./App.css";
import { useGetAllUserMutation, useGetUserMutation } from "./services/userAuth";
import ShowDatatable from "./components/ShowDatatable";
import LoginComponent from "./components/LoginComponent";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [getUser] = useGetUserMutation();
  const [userList, setUserList] = useState(null);
  const [getAllUser, data, error, isLoading] = useGetAllUserMutation();

  const loginSuccess = () => toast("User logged in Successfully!");
  const loginFail = () => toast("Sorry Something went Wrong");
  const dataFetched = () => toast("User list is fetched check below");

  const loginUser = (e) => {
    e.preventDefault();
    const { userName, password } = e.target.elements;
    let formData = {
      email: userName.value,
      password: password.value,
    };
    setUserList(null);
    getUser(formData)
      .unwrap()
      .then((e) => {
        loginSuccess();
        sessionStorage.setItem("token", e.token);
        return e.token;
      })
      .then((token) => {
        return getAllUser(token);
      })
      .then((result) => {
        setUserList(result?.data?.data);
        dataFetched();
      })
      .catch((error) => {
        loginFail();
        console.log(error);
      });
  };
  return (
    <>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <LoginComponent loginUser={loginUser} />
        ) : null}
        {userList && <ShowDatatable data={userList} />}
      </div>
    </>
  );
}

export default App;
