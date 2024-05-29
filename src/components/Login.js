import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Login() {
  var [apidata, setapidata] = useState([]);

  useEffect(function () {
    console.log("Call Api");
    console.log(axios);
    var ans = axios.get("https://fakestoreapi.com/products");
    console.log(ans);
    ans.then(function (response) {
      //   console.log(response);
      console.log(response.data);
      setapidata(response.data);
    });
  }, []);
  return (
    <div className="container xyz ">
      <h1>Api data</h1>
      <div className="row">
        {apidata &&
          apidata.length > 0 &&
          apidata.map((value) => (
            <div className="col-3 text-center " style={{"border": "solid"}}  >
              <img src={value.image} className="img-fluid pt-3" alt="" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
