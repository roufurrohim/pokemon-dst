import React from "react";
import { ChevronLeft, Plus } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Input, Card, Button } from "reactstrap";


const Add = () => {

    const navigate = useNavigate();

    const toggle = () => {
      navigate("/")
    }

    const handleChangeFile = (e) => {
      console.log(e.target.files)
    }

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "120px",
            backgroundColor: "#E51C23",
            padding: "0 60px",
            color: "white",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={toggle}>
            <ChevronLeft size={38} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <h1 style={{ fontSize: "28px", padding: 0, margin: 0}}>Tambah Baru</h1>
          </div>
        </div>
        <div className="mt-5 px-5">
            <div className="row p-0 m-0">
                <div className="col-3">
                    <div>
                        <Input
                            type="file"
                            onChange={handleChangeFile}
                        />
                    </div>

                </div>
                <div className="col-9">
                    <Card
                        style={{
                            height: "678px",
                            background: "#FFFFFF",
                            boxShadow: "0px 0px 7.37778px rgba(0, 0, 0, 0.25)",
                            borderRadius: "20px",
                            padding: "30px"
                        }}
                    >
                        <h2 style={{ color: "#E51C23" }}>Informasi Umum</h2>
                    </Card>
                    <Card
                        style={{
                            background: "#FFFFFF",
                            boxShadow: "0px 0px 7.37778px rgba(0, 0, 0, 0.25)",
                            borderRadius: "20px",
                            padding: "30px",
                            marginTop: "30px"
                        }}
                    >
                        <h2 style={{ color: "#E51C23" }}>Evolution</h2>
                        <div className="mt-3">
                          <Button color="danger" className="w-100 h-50">
                            <Plus />
                            <span>Tambah</span>
                          </Button>
                        </div>
                    </Card>
                    <div
                    className="my-4"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                        outline
                        color="danger"
                        style={{color: "red"}}
                        className="me-3"
                      >
                        Cancel
                      </Button>
                      <Button>
                        Tambah
                      </Button>
                  </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Add;
