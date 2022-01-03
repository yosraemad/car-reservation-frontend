import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const CustomInput = (props) => {
  const { labelText, id, type, handleChange } = props;
  return (
    <FormControl className="custom-input">
      {labelText !== undefined ? (
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
      ) : null}
      <Input id={id} onChange={handleChange} type={type} />
    </FormControl>
  );
};

export default CustomInput;
