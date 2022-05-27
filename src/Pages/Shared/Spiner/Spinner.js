import React from "react";
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spn mx-auto">
      <div class="ring">
        Loading
        <span className="span"></span>
      </div>
    </div>
  );
};

export default Spinner;
