import React,{useEffect,useState} from 'react'
import axios from "axios";

export default function Right(props) {
    var [apidata, setapidata] = useState([]);
    useEffect(function(){
        if(props.p2 !=""){
            var apipath = axios.get(`http://fakestoreapi.com/products/category/${props.p2}`);
            console.log(apipath);
            apipath.then(function (response) {
                //   console.log(response);
                console.log(response.data);
                setapidata(response.data);
              });
        
        }

    },[props.p2]) //use effect call on condition 
  return (
    //<div>Right,{props.p2}</div>
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
    
  )
}
