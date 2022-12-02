import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payments = ({ setModal }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const validate = (inp) => {
    let result = {
      message: "",
      status: true,
    };
    if (inp?.Name?.length < 5 || inp?.Name == undefined) {
      return (result = {
        message: "Invalid Name length",
        status: false,
      });
    }
    if (String(inp?.Phone).length < 10 || inp?.Name == undefined) {
      return (result = {
        message: "Invalid Phone length",
        status: false,
      });
    }
    if (inp?.Email?.length < 12 || inp?.Email == undefined) {
      return (result = {
        message: "Invalid Email length",
        status: false,
      });
    }
    if (inp?.Amount <= 0 || inp?.Amount == undefined) {
      return (result = {
        message: "Amount should not be equal to 0",
        status: false,
      });
    }
    return result;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let check = validate(input);
    if (check.status) {
      navigate("/Thanku", { state: input });
    } else {
      alert(check.message);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.6)",
        height: "100vh",
        width: "98.8vw",
        top: "0px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="form d-flex "
        style={{
          width: "500px",
          margin: "auto",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          placeholder="Enter your Name"
          class="form-control my-2 text-center p-3"
          autoComplete="off"
        />
        <input
          type="text"
          name="Email"
          onChange={handleChange}
          placeholder="Enter you Email"
          class="form-control my-2 text-center p-3"
          autoComplete="off"
        />
        <input
          type="text"
          name="Phone"
          onChange={handleChange}
          placeholder="Enter your Phone Number "
          class="form-control my-2 text-center p-3"
          autoComplete="off"
        />
        <input
          type="text"
          name="Amount"
          onChange={handleChange}
          placeholder="Amount"
          class="form-control my-2 text-center p-3"
          autoComplete="off"
        />
        <input
          type="text"
          name="Location"
          onChange={handleChange}
          placeholder="Enter your Location"
          class="form-control my-2 text-center p-3"
          autoComplete="off"
        />
        <button className="btn btn-success p-3">Place order </button>
        <button className="btn btn-danger p-3 mt-3" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Payments;
