import React, { useEffect, useState } from "react";
import Box from "./Box";
import image1 from "../../../images/s1.png"
import image2 from "../../../images/s2.png"
import { Link as Link } from 'react-router-dom'
import axios from "axios";
import { API_GET_PRODUCT } from "../../utils/const";

const Services = () => {

  const [dataProduct, setDataProduct] = useState([])

  const getProduct = async () => {
    const result = await axios.get(API_GET_PRODUCT)
    if (result) {
      setDataProduct(result.data)
    }
  }
  console.log("list product ", dataProduct);

  useEffect(() => {
    getProduct()
  }, [])


  return (

    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some services I Provide</p>
      </div>
      <div className="b-container">
        {dataProduct &&
          dataProduct.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {/* <Link to={`/detail/${item.id}`}> */}
                <Box {...item} />
                {/* </Link> */}
              </React.Fragment>
            )
          })
        }

        {/* <Link to="/gold">
          <Box image={image1} alt="image2" button="100 STA" />
        </Link>
        <Link to="/diamond">
          <Box image={image1} alt="image1" button="1000 STA" />
        </Link> */}
      </div>
    </div>
  );
};

export default Services;
