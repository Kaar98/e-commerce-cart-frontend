import Product from "./Product";
const Home = () => {
  const con = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const ml = {
    marginLeft: "20px",
  };
  
  return (
    <>
      <div className="container mt-0" style={con}>
        <div className="boxkan1">
          <p className="em">Are you hungry?</p>
          <h4>Don't wait!</h4>
          <button type="button" className="btn btn-outline-success">
            Order Now
          </button>
        </div>
        <div className="boxkan2 rounded" style={ml}>
          <img
            className="img-fluid"
            src="/images/pizza-3007395__480.jpg"
            alt="pizzaimg"
          />
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
