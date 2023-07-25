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
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <h2
          className="coming-soon-title fw-bold"
          style={{ fontFamily: "Delcom" }}
        >
          Coming Soon
        </h2>
        <div className="countdown-container">
          <div className="countdown-item">
            <div className="countdown-box">
              <div className="countdown-content">
                <div className="countdown-value">{days}</div>
                <div className="countdown-label">Days</div>
              </div>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-box">
              <div className="countdown-content">
                <div className="countdown-value">{hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-box">
              <div className="countdown-content">
                <div className="countdown-value">{minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-box">
              <div className="countdown-content">
                <div className="countdown-value">{seconds}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <p className="coming-soon-text fs-4">
          Our website is under construction. We`ll be here soon with our new
          awesome site.
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
