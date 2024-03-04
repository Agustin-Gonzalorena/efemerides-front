import React, { useEffect, useState } from "react";
import { useApi } from "../../context/apiEfemerides.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  const { statusSv, loading } = useApi();
  const [svOnline, setSvOnline] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  useEffect(() => {
    if (statusSv !== "") {
      setSvOnline(true);
    } else {
      setSvOnline(false);
    }
  }, [statusSv]);
  return (
    <header className="h-16 border-b-2 border-white flex justify-center items-center text-white">
      <div className="w-9/12 flex justify-between items-center ">
        <Link to="/" title="home" style={{ width: "33%" }}>
          <p style={{ fontSize: "30px" }}>EFEMERIDES</p>
        </Link>
        {mobile ? null : (
          <div
            style={{
              display: "flex",
              width: "33%",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "30px",
              }}
            >
              <Link to="/" title="home">
                <li>Home</li>
              </Link>
              <Link to="/about" title="about">
                <li>About</li>
              </Link>
            </ul>
          </div>
        )}
        <p className="w-[33%] text-end">
          server{" "}
          <span
            className={`${
              loading
                ? "text-white"
                : svOnline
                ? "text-green-600"
                : "text-red-600"
            } font-bold`}
          >
            {loading ? "..." : svOnline ? "online" : "offline"}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
