import React, { Fragment } from "react";

const Loading = () => {
  return (
    <Fragment>
      <div className='loader-wrapper'>
        <div className='row loader-text'>
          <div className='col-12'>
            <img src='/assets/images/loader/loader.gif' className='img-fluid' alt='' />
          </div>
          <div className='col-12'>
            <div>
              <h3 className='mb-0'>Please wait Real estate Template loading...</h3>
            </div>
          </div>
        </div>
      </div>
     
       
    </Fragment>
  );
};

export default Loading;
