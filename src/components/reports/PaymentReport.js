import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/CustomButton";
import useHttp from "../../hooks/use-http";



const PaymentReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { error, isLoading, sendRequest } = useHttp();
  const [payments, setPayments] = useState([]);

  const fillPayments = (responseData) => {
    console.log(responseData);
    let res = [];
    for (let i = 0; i < responseData.length; i++) {
      res.push(responseData[i]);
    }
    setPayments(res);
  };

  const handleSubmit = async () => {
    let queryString = "?";
    const startDateDate = new Date(startDate);
    const endDateDate = new Date(endDate);

    queryString +=
      "start_date=" + startDateDate.toISOString().substring(0,10) +
      "&" ;
    queryString +=
      "end_date=" +
      endDateDate.toISOString().substring(0,10)
    console.log(queryString);

    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/reports/payments" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      fillPayments.bind(this)
    );
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      
      <CustomButton onClicked={handleSubmit}>Submit</CustomButton>
      <div>

        {payments.map((payment) => (
           <div key={payment.payment_id}>
             <br></br>
           <h3>Payment Id: {payment.payment_id}</h3>
           <h3>Reservation Id:{payment.res_id}</h3>
           <h3>Amount: {payment.amount} </h3>
           <h3>Payment Date: {payment.payment_date}</h3>
           <br></br>
         </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentReport;
