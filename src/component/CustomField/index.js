import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const CustomField = (props) => {
  const { error, ...rest } = props;

  return (
    <TextField helperText={error ? error : ""} error={!!error} {...rest} />
  );
};

CustomField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(["medium", "small"]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

CustomField.defaultProps = {
  error: "",
  variant: "outlined",
  value: "",
  fullWidth: true,
  name: "",
  size: "medium",
  type: "text",
  required: false,
  disabled: false,
};

export default CustomField;
