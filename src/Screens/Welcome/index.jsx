import React, { useState, useEffect } from "react";
import header2 from "../../app/assets/img/header2.jpg";
import { Link } from "react-router-dom";
import moment from "moment";

const WelcomeScreen = () => {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
  }, [time]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          maxHeight: "1600px",
          overflow: "hidden",
          position: "relative",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          margin: "0",
          padding: "0",
          border: "0",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${header2})`,

          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            marginBottom: "10%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            backgroundColor: "white",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <div
            style={{ margin: "20px", display: "flex", flexDirection: "column" }}
          >
            <h1
              style={{ color: "grey", fontSize: "40px", textAlign: "center" }}
            >
              Welcome to Daniel Bourke's dev challenge
            </h1>
            <h3
              style={{ color: "grey", fontSize: "20px", textAlign: "center" }}
            >
              current time {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </h3>
            <div
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#13a2d6",
                  fontWeight: "200px",
                  marginRight: "20px",
                }}
                to="/patientinfo"
              >
                <h3 style={{ fontWeight: "400" }}>Patient Table</h3>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#13a2d6",
                  fontWeight: "200px",
                  marginLeft: "20px",
                }}
                to="/about"
              >
                <h3 style={{ fontWeight: "400" }}>About</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
