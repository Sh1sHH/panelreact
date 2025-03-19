import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginEkrani = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Fake kullanıcı listesi
    const users = [
      { id: 1, username: "admin", password: "1234" },
      { id: 2, username: "yusuf", password: "3478" },
    ];

    // Kullanıcı doğrulama
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Kullanıcı bilgilerini kaydet
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", user.username);
      
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      // Kullanıcıyı yönlendir
      navigate("/FormMusteri");
    } else {
      setError("Hatalı kullanıcı adı veya şifre!");
    }
  };

  const handleForgotPassword = () => {
    alert("Şifre sıfırlama özelliği yakında eklenecek.");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        width: "400px",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ color: "#3c4b64", margin: "0 0 10px 0" }}>Giriş Yap</h2>
          <p style={{ color: "#6c757d", margin: 0 }}>Hesabınıza giriş yapın</p>
        </div>
        
        {error && (
          <div style={{
            padding: "10px 15px",
            backgroundColor: "#fde8e8",
            color: "#e53e3e",
            borderRadius: "4px",
            marginBottom: "15px",
            fontSize: "14px"
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "5px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#4a5568"
            }}>
              Kullanıcı Adı
            </label>
            <div style={{
              position: "relative"
            }}>
              <input
                style={{
                  width: "100%",
                  padding: "10px 15px 10px 40px",
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s"
                }}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı adınızı girin"
                required
                aria-label="Kullanıcı Adı"
              />
              <div style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#a0aec0"
              }}>
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "5px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#4a5568"
            }}>
              Şifre
            </label>
            <div style={{
              position: "relative"
            }}>
              <input
                style={{
                  width: "100%",
                  padding: "10px 15px 10px 40px",
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s"
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi girin"
                required
                aria-label="Şifre"
              />
              <div style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#a0aec0"
              }}>
                <i className="fa fa-lock"></i>
              </div>
            </div>
          </div>
          
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
           
          </div>
          
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 15px",
              backgroundColor: "#4299e1",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
          >
            Giriş Yap
          </button>
        </form>
        
        
      </div>
    </div>
  );
};

export default LoginEkrani;
