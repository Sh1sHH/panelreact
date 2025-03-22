import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginEkrani = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const requestBody = {
        username: username,
        password: password
      };

      const response = await axios.post(
        "https://private-da348-yusuf7.apiary-mock.com/auth/login",
        requestBody
      );

      if (response.data.success) {
        // Başarılı login - API'den gelen verileri kullan
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("fullName", response.data.user.fullName);
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("token", response.data.token);
        
        navigate("/Dashboard");
      } else {
        setError(response.data.message || "Hatalı kullanıcı adı veya şifre");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError(error.response.data.message || "Hatalı kullanıcı adı veya şifre");
      } else {
        setError("Giriş yapılırken bir hata oluştu");
      }
    } finally {
      setLoading(false);
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
      backgroundColor: "#48525e",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    }}>
      <div style={{
        width: "400px",
        padding: "40px 30px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(27, 197, 189, 0.6)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <div style={{
            margin: "0 auto 20px",
            width: "150px",
            height: "auto"
          }}>
            <img
              src="../../assets/admin/layout3/img/logo-default.png"
              alt="Metronic Logo"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
          <h2 style={{ 
            color: "#181C32", 
            margin: "0 0 10px 0",
            fontSize: "24px",
            fontWeight: "300",
            letterSpacing: "-0.5px",
            fontFamily: "'Inter', sans-serif"
          }}>
            Hoş Geldiniz
          </h2>
          <p style={{ 
            color: "#99A1B7", 
            margin: "0",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "300"
          }}>
            Devam etmek için giriş yapın
          </p>
        </div>
        
        {error && (
          <div style={{
            padding: "12px 16px",
            backgroundColor: "#FFF5F8",
            color: "#F1416C",
            borderRadius: "6px",
            marginBottom: "20px",
            fontSize: "13px",
            border: "1px solid #FFF5F8"
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{
              position: "relative"
            }}>
              <input
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  border: "1px solid #E4E6EF",
                  backgroundColor: "#ffffff",
                  color: "#181C32",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  '&:focus': {
                    borderColor: "#1BC5BD",
                    boxShadow: "0 0 0 2px rgba(27, 197, 189, 0.1)"
                  }
                }}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı adı"
                required
                disabled={loading}
                aria-label="Kullanıcı Adı"
              />
            </div>
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <div style={{
              position: "relative"
            }}>
              <input
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  border: "1px solid #E4E6EF",
                  backgroundColor: "#ffffff",
                  color: "#181C32",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  '&:focus': {
                    borderColor: "#1BC5BD",
                    boxShadow: "0 0 0 2px rgba(27, 197, 189, 0.1)"
                  }
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                required
                disabled={loading}
                aria-label="Şifre"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 16px",
              backgroundColor: loading ? "#E4E6EF" : "#1BC5BD",
              color: loading ? "#7E8299" : "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
              '&:hover': {
                backgroundColor: loading ? "#E4E6EF" : "#0BB7AF"
              }
            }}
          >
            {loading ? "GİRİŞ YAPILIYOR..." : "GİRİŞ YAP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginEkrani;
