import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

const Corousal = (props) => {
  let corousal_images;
  useEffect(() => {
    if (props.image.images.length === 0) {
      corousal_images = <div>No Images for this Post</div>;
      console.log("Zero");
      console.log(corousal_images);
    } else if (props.image.length === 1) {
      corousal_images = (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                <b>1</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
      console.log("One");
      console.log(corousal_images);
    } else if (props.image.length === 2) {
      corousal_images = (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                <b>1</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[1]}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>
                <b>2</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
      console.log("Two");
      console.log(corousal_images);
    } else if (props.image.length === 3) {
      corousal_images = (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                <b>1</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[1]}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>
                <b>2</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[2]}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                <b>3</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
      console.log("Three");
      console.log(corousal_images);
    } else if (props.image.length === 4) {
      corousal_images = (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                <b>1</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[1]}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>
                <b>2</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[2]}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                <b>3</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[3]}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <p>
                <b>4</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
      console.log("Four");
      console.log(corousal_images);
    } else if (props.image.length === 5) {
      corousal_images = (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                <b>1</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[1]}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>
                <b>2</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[2]}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                <b>3</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[3]}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <p>
                <b>4</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block size-max"
              style={{ height: "232px" }}
              src={props.image.images[4]}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <p>
                <b>5</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
      console.log("Five");
      console.log(corousal_images);
    }
  });

  return <div>{corousal_images}</div>;
};

Corousal.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Corousal;
