import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginEkrani() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake kullanıcı listesi
    const users = [
      { id: 1, username: "admin", password: "1234" },
      { id: 2, username: "user1", password: "5678" },
    ];

    // Kullanıcı doğrulama
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Kullanıcı bilgilerini kaydet
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", user.username);

      // Kullanıcıyı yönlendir ve sayfayı yenile
      navigate("/FormMusteri");
      window.location.reload();
    } else {
      alert("Hatalı kullanıcı adı veya şifre!");
    }
  };

  return (
    <div className="login">
      <div className="content">
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="form-title">Login to your account</h3>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn blue pull-right">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginEkrani;
