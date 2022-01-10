import React, { useRef } from "react";
import labelstyles from "../../styles/label.module.css";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

const CarDescriptionFilters = (props) => {
  const brandRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const transmissionRef = useRef();
  const typeRef = useRef();
  const imageRef = useRef();

  const filter = () => {
    let queryString = "?";
    if (brandRef.current.value !== "") {
      queryString += `brand=${brandRef.current.value}&`;
    }
    if (modelRef.current.value !== "") {
      queryString += `model=${modelRef.current.value}&`;
    }
    if (yearRef.current.value !== "") {
      queryString += `year=${yearRef.current.value}&`;
    }
    if (colorRef.current.value !== "") {
      queryString += `color=${colorRef.current.value}&`;
    }
    if (transmissionRef.current.value !== "") {
      queryString += `transmission=${transmissionRef.current.value}&`;
    }
    if (typeRef.current.value !== "") {
      queryString += `type=${typeRef.current.value}&`;
    }
    if (imageRef.current.value !== "") {
      queryString += `image=${imageRef.current.value}&`;
    }

    props.handleFilter(queryString);
  };

  return (
    <div>
      <label className={labelstyles.label}>Brand: </label>
      <CustomInput
        labelText="brand"
        id="brand"
        handleChange={() => {}}
        type="text"
        ref={brandRef}
      />
      <br />
      <label className={labelstyles.label}>Model: </label>
      <CustomInput
        labelText="model"
        id="model"
        handleChange={() => {}}
        type="text"
        ref={modelRef}
      />
      <br />

      <label className={labelstyles.label}>Year: </label>
      <CustomInput
        labelText="year"
        id="year"
        handleChange={() => {}}
        type="text"
        ref={yearRef}
      />
      <br />

      <label className={labelstyles.label}>Color: </label>
      <CustomInput
        labelText="color"
        id="color"
        handleChange={() => {}}
        type="text"
        ref={colorRef}
      />
      <br />

      <label className={labelstyles.label}>Transmission: </label>
      <CustomInput
        labelText="transmission"
        id="transmission"
        handleChange={() => {}}
        type="text"
        ref={transmissionRef}
      />
      <br />

      <label className={labelstyles.label}>Type: </label>
      <CustomInput
        labelText="type"
        id="type"
        handleChange={() => {}}
        type="text"
        ref={typeRef}
      />
      <br />

      <label className={labelstyles.label}>Image: </label>
      <CustomInput
        labelText="image"
        id="image"
        handleChange={() => {}}
        type="text"
        ref={imageRef}
      />
      <br />

      <CustomButton onClicked={filter}>Filter</CustomButton>
    </div>
  );
};

export default CarDescriptionFilters;
