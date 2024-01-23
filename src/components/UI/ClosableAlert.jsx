import React from "react";

const ClosableAlert = ({ showBox, msg,status = 'alert-primary' }) => {
  if (showBox) return (
    <div
        className=".float-right position-absolute my-3"
        style={{ width: "99%", display: "flex", justifyContent: "end" }}
      >
        <div
          className={`alert ${status} alert-dismissible fade show`}
          role="alert"
        >
          {msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
  );
};

export default ClosableAlert;
