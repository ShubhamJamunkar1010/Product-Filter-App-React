import React, { useState } from "react";
import "./Practice.css";
import StarRatings from "react-star-ratings";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  InputGroup,
  InputGroupText,
  Input
} from "reactstrap";

const Practice = () => {
  const [filterText, setfilterText] = useState("");
  const products = [
    {
      name: "bat",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuymhzefbs6.jpeg?q=70",
      rating: 4.2,
      price: 2000
    },
    {
      name: "jackets",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/k0zlsi80/jacket/m/h/j/l-mens-jkt-009-mrn-candy-house-original-imafg4hzyjzfffq2.jpeg?q=70",
      rating: 4.7,
      price: 2200
    },
    {
      name: "laptop-bag",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/backpack/p/i/w/-original-imagh3wazwse8qpz.jpeg?q=70",
      rating: 4.0,
      price: 800
    },
    {
      name: "camera",
      imgUrl:
        "https://rukminim1.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
      rating: 4.2,
      price: 20000
    },
    {
      name: "gun",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/kmds4nk0/pocket-lighter/e/d/3/steel-gun-lighter-set-of-1-mini-v-enterprises-original-imagfa3s5smfhppy.jpeg?q=70",
      rating: 4.2,
      price: 500
    },
    {
      name: "jeans",
      imgUrl:
        "https://rukminim1.flixcart.com/image/832/832/k0wqwsw0/jean/z/6/s/36-10064531-roadster-original-imafkhyf29bg78pn.jpeg?q=70",
      rating: 4.6,
      price: 2220
    },
    {
      name: "t-shirt",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/kz8qsnk0/t-shirt/g/z/n/m-db1024-42-3bros-original-imagbawh38j3ghzr.jpeg?q=70",
      rating: 4.1,
      price: 200
    },
    {
      name: "kurti",
      imgUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/x/k/m-51vs1058kr-vasant-apparel-original-imaggjekg2nug2ex-bb.jpeg?q=70",
      rating: 4.4,
      price: 1700
    }
  ];

  return (
    <div>
      <div>
        <InputGroup>
          <InputGroupText>Filter products</InputGroupText>
          <Input
            type="text"
            value={filterText}
            onChange={(event) => setfilterText(event.target.value)}
          />
        </InputGroup>
      </div>
      <div className="product-Container">
        {products
          .filter((product) => product.name.includes(filterText))
          .map((item) => (
            <div className="product">
              <Card style={{ width: "18rem" }}>
                <img className="image" alt="Sample" src={item.imgUrl} />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    ₹{item.price}
                    <br />
                    <StarRatings
                      starDimension="15px"
                      rating={item.rating}
                      starRatedColor="blue"
                      numberOfStars={5}
                      name="rating"
                    />
                  </CardSubtitle>
                  <div>
                    <Button color="primary">Add to cart</Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Practice;
