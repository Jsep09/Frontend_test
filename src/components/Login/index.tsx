import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockUsers from "../../mock/mockUser";
import logInstyle from "./index.module.css";
import { encrypt } from "../../utils/encript";
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  // ค้นหา Username และ Password ที่ตรงกับ data ที่ได้ mock ไว้ เมื่อ User กด sign in
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const findMatchUser = mockUsers.find((e) => e.username === username);
    if (!findMatchUser) {
      setError(true);

      return;
    }
    const IscorrectUser = await encrypt.comparePassword(
      password,
      findMatchUser?.password
    );
    console.log(await encrypt.cryptPassword("password"));

    //ถ้าค้นหาแล้วตรง Mock ที่มีจะทำการ Redirect ไปหน้า Dashboard
    if (IscorrectUser) {
      console.log("Log In success!");
      localStorage.setItem("IsLogIn", "true");
      navigate("/dashboard");
    } else {
      console.log("Log In Failed !!");
      setError(true);
    }
  };
  return (
    <div className={logInstyle.loginPage}>
      <div className={logInstyle.loginContainer}>
        <div className={logInstyle.loginCard}>
          <form action="" onSubmit={handleSubmit}>
            <div className={logInstyle.head}>
              <h1>Sign In</h1>
            </div>
            <div className={logInstyle.inputBox}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ borderColor: error ? "red" : "" }}
              />
              <i>Username</i>
            </div>
            <div className={logInstyle.inputBox}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: error ? "red" : "" }}
              />
              <i>Password</i>
            </div>
            <div className={logInstyle.errMessage}>
              {error && <p>Username or Password Incorrect !!!</p>}
            </div>
            <div className={logInstyle.btnBox}>
              <button type="submit" className={logInstyle.submitBtn}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
