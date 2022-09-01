import React, { useEffect, useState } from "react";
import Box from "./Box";
import image1 from "../../../images/s1.png"
import image2 from "../../../images/s2.png"
import { Link as Link } from 'react-router-dom'
import axios from "axios";
import { API_ADD_ORDER, API_GET_PRODUCT } from "../../utils/const";
import { toast } from 'react-toastify';


const Services = () => {
  let token = localStorage.getItem("token");
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

  const order = async (id) => {
    console.log("ok ", id);
    try {
      const response = await axios.post(API_ADD_ORDER + token, { "productId": id })
      toast.success("Order success", {
        autoClose: 2000
      })
    } catch (error) {
      toast.error("Error API", {
        autoClose: 2000
      })
    }

  }

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
                <Box onclick={() => order(item.id)} {...item} />
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
