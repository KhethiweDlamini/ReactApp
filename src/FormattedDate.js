import React from "react";

export default function FormattedDate(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let day = props.date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {weekDays[day]} {hours}:{minutes}
    </span>
  );
}
