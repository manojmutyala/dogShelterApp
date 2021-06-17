import React from "react";
import { Card, Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Details = () => {
  const { breed, details, available } = useSelector(
    (state) => state.detailsReducer
  );
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Card
      title={breed}
      style={{ textAlign: "left" }}
      extra={
        <Button type="link">
          {" "}
          <Link to="/dashboard">Back</Link>
        </Button>
      }
    >
      <p>{details}</p>
      <p>{available}</p>
      <Carousel effect="fade" autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Card>
  );
};

export default Details;
