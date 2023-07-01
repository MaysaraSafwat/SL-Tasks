import React from 'react'
import {ClipLoader} from "react-spinners";
type loaderType ={
  loading: boolean,
  message: string,
  size:number
}
const Loader = ({ loading, message, size }: loaderType) => {

    if (size === undefined)
        size = 40;

    return loading ? (
      <div className="overlay-content">
        <div className="wrapper">
          <ClipLoader size={size} color={"#123abc"} loading={loading} />
          <span className="message">{message}</span>
        </div>
      </div>
    ) : null;
};

export default Loader;