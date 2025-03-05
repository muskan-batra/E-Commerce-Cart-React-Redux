import React from "react";
import { Table, Button } from "react-bootstrap";


const CardsDetails = () => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Item Details Page</h2>
        <section className="container mt-3">
          <div className="row p-4 shadow rounded bg-white align-items-center">
            {/* Image Column */}
            <div className="col-md-5 text-center">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                className="img-fluid rounded"
                alt="Food Item"
              />
            </div>

            {/* Details Column */}
            <div className="col-md-7">
              <Table borderless>
                <tbody>
                  <tr>
                    <td><strong>Restaurant :</strong></td>
                    <td>Massala Theoryy</td>
                  </tr>
                  <tr>
                    <td><strong>Price :</strong></td>
                    <td>₹ 350</td>
                  </tr>
                  <tr>
                    <td><strong>Rating :</strong></td>
                    <td>
                      <span className="badge bg-success p-2">3.8 ★</span>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Dishes :</strong></td>
                    <td>North Indian, Biryani, Mughlai</td>
                  </tr>
                  <tr>
                    <td><strong>Total :</strong></td>
                    <td>₹ 350</td>
                  </tr>
                  <tr>
                    <td><strong>Order Review :</strong></td>
                    <td>
                      1175+{" "}
                      <a  className="text-primary text-decoration-none">
                        order placed from here recently
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Remove :</strong></td>
                    <td>
                      <i className="fas fa-trash"></i>
                    </td>
                  </tr>
                </tbody>
              </Table>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center">
                <Button variant="light" className="border">
                  -
                </Button>
                <span className="mx-3">1</span>
                <Button variant="light" className="border">
                  +
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
