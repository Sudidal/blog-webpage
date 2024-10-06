import classes from "./loadingDisplay.module.css";
import FileToInlineSvg from "../fileToInlineSvg/fileToInlineSvg.jsx";

function LoadingDisplay() {
  return (
    <div className={classes.loading}>
      <p>loading...</p>
      <div className={classes.rotate}>
        <FileToInlineSvg
          path={"/loading.svg"}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    </div>
  );
}

export default LoadingDisplay;
