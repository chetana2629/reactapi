function Product(props) {
  //outer fun act as componet
  function myfunction() {
    // inner function for Event handiling

   // alert();
   props.price=9000
  }
  console.log(props);
  return (
    <div className="border p-2 ">
      <h2>{props.price}</h2>
      <p>{props.name}</p>
      <button onClick={myfunction}>Add to cart</button>
    </div>
  );
}

export default Product;
