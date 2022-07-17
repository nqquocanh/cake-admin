import { useNavigate, useParams } from "react-router-dom";

import { data } from "../../dummy-data";
const cats = ["cake", "gato", "bread"];

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData] = data.filter((item) => +item.id === +id);
  if (!productData) {
    console.log("no product");
    navigate("/products", { replace: true });
  }
  console.log(productData);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">{productData?.title}</h1>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    id="title"
                    value={productData.title ? productData.title : ""}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="price">
                    Price
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    id="price"
                    value={productData.price ? productData.price : ""}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="img">
                    Image
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="img"
                    id="img"
                    value={productData.img ? productData.img : ""}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="category">
                    Category
                  </label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    defaultValue={productData.category}
                  >
                    {cats &&
                      cats.map((cat, index) => (
                        <option value={cat} key={index}>
                          {cat.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="description"
                    name="description"
                    value={productData.description ? productData.description : ""}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div className="mt-3 text-end">
              <button className="btn btn-primary ">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
