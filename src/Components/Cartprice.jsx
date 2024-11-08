import React from "react";
import PropTypes from "prop-types";
import "./Cartprice.css";


let crt =<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>

let wrong =<svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x disable" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>

function Cartprice({ data }) {
  return (
    <>
      <div class="row gap-1 ">
        {data.map((info, index) => (
          <div className=" col-md-4 box  " key={index}>
            <div className="free">
              <span>{info.title}</span>
              <h1>{info.price}</h1>
            </div>

            <hr />
            {info.booluser?<p>{crt}{info.user}</p>: <p className="disable">{wrong}{info.user}</p>}
            {info.boolstorge?<p>{crt}{info.storge}</p>: <p className="disable">{wrong}{info.storge}</p>}          
            {info.boolproject?<p>{crt}{info.project}</p>: <p className="disable">{wrong}{info.project}</p>}  
            {info.boolCommunity?<p>{crt}{info.Community}</p>: <p className="disable">{wrong}{info.Community}</p>}          
            {info.boolprivate?<p>{crt}{info.privateproject}</p>: <p className="disable">{wrong}{info.privateproject}</p>}
            {info.boolsupport?<p>{crt}{info.support}</p>: <p className="disable">{wrong}{info.support}</p>}
            {info.boolsubdomin?<p>{crt}{info.subdomin}</p>: <p className="disable">{wrong}{info.subdomin}</p>}
            {info.boolReports?<p>{crt}{info.Reports}</p>: <p className="disable">{wrong}{info.Reports}</p>}
            {info.boolbtn? <div className="btn" >
              <button type="button">Button</button>
            </div>: <div className="btn disable" >
              <button type="button">Button</button>
            </div>}
           
          </div>
        ))}
      </div>
    </>
  );
}

Cartprice.propTypes = {};

export default Cartprice;

