
/* eslint-disable react/prop-types */
export const NewEventAddedPopUp = ({ newEvent }) => {
    if (newEvent == "true") {
      return (
        <>
          <div className="mx-3 d-flex align-items-end flex-column">
          <div
            className="alert alert-success d-flex align-items-center w"
            role="alert"
          >
            <div>Event Created Sucessfully</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          </div>
        </>
      );
    }
  };
  