import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import './cursor.css'

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({location}) => {

  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const addEventListeners = React.useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const removeEventListeners = React.useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, []);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners, location]);

  const onMouseMove = (e) => {
    setActive(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    const itemsEffectCursor = 
      [
        ".cursorEffect",
        ".letter",
        ".sociallinks a"
      ]
    itemsEffectCursor.forEach((acc) => {
      document.querySelectorAll(acc).forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    })
  };

  const cursorClasses = classNames("cursor", {
    "cursor--on": active,
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered
  });

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <div
      className={cursorClasses}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` ,
      }}
    />
  )
}

export default Cursor
