import React, { useState, useEffect } from "react";
import "./ComingSoon.css";

const ComingSoon = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeRemaining = targetTime - now;

    return timeRemaining > 0 ? timeRemaining : 0;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <section id="coming-soon">
      <div className="container-fluid h-100 d-flex flex-row align-items-center justify-content-center">
        <div className="d flex flex-column align-items-center justify-content-center">
          <h2
            className="coming-soon-title fw-bold"
            style={{ fontFamily: "Delcom" }}
          >
            Coming Soon . . .
          </h2>
          <p className="coming-soon-text fs-4">
            Stay frosty! our website is under construction. We`ll be here soon
            with our new awesome site.
          </p>
          <div className="countdown-container mt-2">
            <div className="countdown-item">
              <div className="countdown-box">
                <div className="countdown-content">
                  <h4 className="countdown-value">{days}</h4>
                  <h4 className="countdown-label">Days</h4>
                </div>
              </div>
            </div>
            <p className="fs-1 m-2" style={{ color: "white" }}>
              :
            </p>
            <div className="countdown-item">
              <div className="countdown-box">
                <div className="countdown-content">
                  <h4 className="countdown-value">{hours}</h4>
                  <h4 className="countdown-label">Hours</h4>
                </div>
              </div>
            </div>
            <p className="fs-1 m-2" style={{ color: "white" }}>
              :
            </p>
            <div className="countdown-item">
              <div className="countdown-box">
                <div className="countdown-content">
                  <h4 className="countdown-value">{minutes}</h4>
                  <h4 className="countdown-label">Minutes</h4>
                </div>
              </div>
            </div>
            <p className="fs-1 m-2" style={{ color: "white" }}>
              :
            </p>
            <div className="countdown-item">
              <div className="countdown-box">
                <div className="countdown-content">
                  <h4 className="countdown-value ">{seconds}</h4>
                  <h4 className="countdown-label ">Seconds</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
