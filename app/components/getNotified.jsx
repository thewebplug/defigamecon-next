"use client"
import { useState } from "react";

export default function GetNotified() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(1);

  const handleModalClose = (e) => {
    if (e.target.classList.contains("notif__modal")) {
      setOpen(false);
      setStage(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage(2);
  };

  return (
    <div className="notif">
      <div className="notif__title">Get notified first!</div>
      <div className="notif__subtitle">
        Be the first to get notified about updates about this Event
      </div>

      <button onClick={() => setOpen(true)}>Get notified</button>

      {open && (
        <div className="notif__modal" onClick={handleModalClose}>
          <div className="notif__modal__inner">
            <div className="notif__modal__inner__title">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setOpen(false);
                  setStage(1);
                }}
              >
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#fff"
                />
                <path
                  d="M9.17011 15.5804C8.98011 15.5804 8.79011 15.5104 8.64011 15.3604C8.35011 15.0704 8.35011 14.5904 8.64011 14.3004L14.3001 8.64035C14.5901 8.35035 15.0701 8.35035 15.3601 8.64035C15.6501 8.93035 15.6501 9.41035 15.3601 9.70035L9.70011 15.3604C9.56011 15.5104 9.36011 15.5804 9.17011 15.5804Z"
                  fill="#fff"
                />
                <path
                  d="M14.8301 15.5804C14.6401 15.5804 14.4501 15.5104 14.3001 15.3604L8.64011 9.70035C8.35011 9.41035 8.35011 8.93035 8.64011 8.64035C8.93011 8.35035 9.41011 8.35035 9.70011 8.64035L15.3601 14.3004C15.6501 14.5904 15.6501 15.0704 15.3601 15.3604C15.2101 15.5104 15.0201 15.5804 14.8301 15.5804Z"
                  fill="#fff"
                />
              </svg>
            </div>

            {stage === 1 && (
              <form
                className="notif__modal__inner__form"
                onSubmit={handleSubmit}
              >
                <input type="email" placeholder="email" />
                <button>Get notified</button>
              </form>
            )}

            {stage === 2 && (
              <div className="notif__modal__inner__message">
                <div className="notif__modal__inner__message__title">
                  Thank you!
                </div>

                <div className="notif__modal__inner__message__subtitle">
                  We'll let you know if there are any updates about this event
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
