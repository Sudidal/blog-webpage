import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import FileToInlineSvg from "../fileToInlineSvg/fileToInlineSvg.jsx";
import classes from "./prettyCheckbox.module.css";

function PrettyCheckbox({ name, defaultVal = false}) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(defaultVal)
  }, [defaultVal])
  
  function toggleChecked() {
    setChecked(!checked)
  }

  return (
    <div>
      <div className={`${classes.checkbox} input`} onClick={toggleChecked}>
        {checked && <FileToInlineSvg path="/check.svg" style={{width: "20px", height: "20px"}} />}
      </div>
      <input type="checkbox" name={name} id={name} checked={checked} readOnly hidden />
    </div>
  );
}

PrettyCheckbox.propTypes = {
  name: PropTypes.string,
  defaultVal: PropTypes.any,
};

export default PrettyCheckbox;
