import React from "react";
import "./infiniteScroll.css"; // add this CSS file below

export function InfiniteScroll({ children, speed = 30, direction = "normal" }) {
  const scrollDirection = direction === "reverse" ? "scroll-reverse" : "scroll-normal";

  return (
    <div className={`infinite-scroll-wrapper ${scrollDirection}`}>
      <div className="infinite-scroll-track">
        <div className="infinite-scroll-content">{children}</div>
        <div className="infinite-scroll-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
