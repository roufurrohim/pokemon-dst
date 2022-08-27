import React from "react";
import { Plus } from "react-feather";
import { useNavigate } from "react-router-dom";
import Pokemon from "../assets/pokemon.png";

function MyNav() {
  const navigate = useNavigate();

  const toggle = () => {
    navigate("/add")
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "120px",
          backgroundColor: "#E51C23",
          padding: "0 60px",
        }}
      >
        <div>
          <div style={{ cursor: "pointer" }}>
            <img src={Pokemon} alt="title" width={165} height={60} />
          </div>
        </div>
        <div>
          <Plus
            onClick={toggle}
            size={50}
            style={{ color: "white", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyNav;
