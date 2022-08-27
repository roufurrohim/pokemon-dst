/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, CardTitle, Button } from "reactstrap";
import { getAllList } from "../redux/actions"
import MyNav from "../component/nav";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const dispatch = useDispatch()
  const dataList = useSelector((state) => state.list)

  useEffect(() => {
    loadHandler()
  }, [])

  const loadHandler = () => {
    dispatch(getAllList())
  }
  return (
    <>
      <MyNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="d-flex flex-wrap"
          style={{
            padding: "0 165px",
          }}
        >
          {dataList.list && dataList.list.length > 0 &&
          dataList.list.map((data, i) => (
            <Card
              key={i}
              className="my-3 mx-5"
              style={{
                width: "258px",
                height: "353px",
                padding: "20px",
                borderRadius: "20px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 6.58974px rgba(0, 0, 0, 0.25)",
                cursor: "pointer",
              }}
            >
              <CardTitle
                tag="h6"
                style={{ marginLeft: "10px", color: "#8D7777" }}
              >
                {data.number}
              </CardTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={data.avatar}
                    alt="avatar"
                    width={164}
                    height={153}
                  />
                  <h5 className="text-center my-3" style={{ color: "#E51C23" }}>
                    {data.name}
                  </h5>
                  <div
                    className="my-4"
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {data.types.map((dat) => (
                      <Button
                        key={dat.uuid}
                        style={{
                          backgroundColor:
                            dat.name === "Grass"
                              ? "#8BC34A"
                              : dat.name === "Poison"
                              ? "#AA22B0"
                              : dat.name === "Fire"
                              ? "#FF7A00"
                              : dat.name === "Flying"
                              ? "#CC9CF7"
                              : dat.name === "Water"
                              ? "#2BC3FF"
                              : dat.name === "Bug"
                              ? "#8BC34A"
                              : dat.name === "Normal"
                              ? "#2BC3FF"
                              : dat.name === "Dragon"
                              ? "#FF7A00"
                              : dat.name === "Steel"
                              ? "#8BC34A"
                              : dat.name === "Rock"
                              ? "#CC9CF7"
                              : "",
                          border: "none",
                          color: "white",
                        }}
                      >
                        {dat.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
