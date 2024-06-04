import React from "react";

const ChildComponent01 = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        placeholder="Enter Name in Child Component"
      />
    </div>
  );
});

export default ChildComponent01;
