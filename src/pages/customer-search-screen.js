import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import labelstyles from "../styles/label.module.css";
import CustomInput from "../components/UI/CustomInput";
import CustomButton from "../components/UI/CustomButton";

const CustomerSearchScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const [customers, setCustomers] = useState([]);

  const address = useRef();
  const license_number = useRef();
  const phone = useRef();
  const email = useRef();
  const name = useRef();

  const filterCustomer = (responseData) => {
    console.log(responseData);
    if (responseData) {
      let customerArr = [];
      for (let i = 0; i < responseData.length; i++) {
        customerArr.push(responseData[i]);
      }

      setCustomers(customerArr);
    }
  };

  const handleFiltering = async (queryString) => {
    const token = localStorage.getItem("token");
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/customers" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      filterCustomer.bind(null)
    );
  };

  const filter = () => {
    let queryString = "?";
    if (address.current.value !== "") {
      queryString += `address=${address.current.value}&`;
    }
    if (license_number.current.value !== "") {
      queryString += `license_number=${license_number.current.value}&`;
    }
    if (phone.current.value !== "") {
      queryString += `phone=${phone.current.value}&`;
    }
    if (email.current.value !== "") {
      queryString += `email=${email.current.value}&`;
    }
    if (name.current.value !== "") {
      queryString += `name=${name.current.value}&`;
    }

    handleFiltering(queryString);
  };

  return (
    <div>
      {customers.map((customer) => {
        return (
          <div key={customer.customer_id}>
            <h1>{customer.Account.name}</h1>
          </div>
        );
      })}

      <br />
      <label className={labelstyles.label}>address</label>
      <CustomInput
        labelText="address"
        id="address"
        handleChange={() => {}}
        type="text"
        ref={address}
      />
      <label className={labelstyles.label}>license_number</label>
      <CustomInput
        labelText="license_number"
        id="license_number"
        handleChange={() => {}}
        type="text"
        ref={license_number}
      />
      <label className={labelstyles.label}>phone</label>
      <CustomInput
        labelText="phone"
        id="phone"
        handleChange={() => {}}
        type="text"
        ref={phone}
      />
      <label className={labelstyles.label}>email</label>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
        ref={email}
      />
      <label className={labelstyles.label}>name</label>
      <CustomInput
        labelText="name"
        id="name"
        handleChange={() => {}}
        type="text"
        ref={name}
      />
      <CustomButton onClicked={filter}>Filter</CustomButton>
    </div>
  );
};

export default CustomerSearchScreen;
