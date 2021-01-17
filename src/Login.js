import React from "react";
import "./Login.css";
import { loginURL } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png" />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
export default Login;
