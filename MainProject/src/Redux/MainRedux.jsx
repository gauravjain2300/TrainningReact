import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dc, ic, inc_by_user } from "./Features/Counter";
import { Button } from "reactstrap";

export default function MainRedux() {
  const data = useSelector((state) => {
    console.log("------->State", state);
    return state.counterkey.count;
  });

  const handleDynamic = () => {
    dispatch(inc_by_user(100));
  };
  const scoredata = useSelector((state) => {
    return state.scorekey.score;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => dispatch(ic())}>INC++</button>
      <h1>Counter:{data}</h1>
      <button onClick={() => dispatch(dc())}>INC--</button>
      <br />
      <button onClick={handleDynamic}> user</button>
      {/* <Button variant="contained">Contained</Button> */}
      <h1>Score :{scoredata}</h1>
    </div>
  );
}
