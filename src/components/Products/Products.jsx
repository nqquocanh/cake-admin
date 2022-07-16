import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../dummy-data";

const Products = () => {
  // console.log(data);
  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">Products</h1>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
