import "../styles/Advertising.css";
import { useState } from "react";

export function Advertising() {
  const [monthNum, setMonthNum] = useState(0);
  const [calendarArray, setCalendarArray] = useState([
    {
      name: "Январь",
      mondays: ["", 3, 10, 17, 24, 31],
      tuesdays: ["", 4, 11, 18, 25],
      wednesdays: ["", 5, 12, 19, 26],
      thursdays: ["", 6, 13, 20, 27],
      fridays: ["", 7, 14, 21, 28],
      saturdays: [1, 8, 15, 22, 29],
      sundays: [2, 9, 16, 23, 30],
    },
    {
      name: "Февраль",
      mondays: [" ", 7, 14, 21, 28],
      tuesdays: [1, 8, 15, 22],
      wednesdays: [2, 9, 16, 23],
      thursdays: [3, 10, 17, 24],
      fridays: [4, 11, 18, 25],
      saturdays: [5, 12, 19, 26],
      sundays: [6, 13, 20, 27],
    },
    {
      name: "Июль",
      mondays: [" ", 4, 11, 18, 25],
      tuesdays: [" ", 5, 12, 19, 26],
      wednesdays: [" ", 6, 13, 20, 27],
      thursdays: [" ", 7, 14, 21, 28],
      fridays: [1, 8, 15, 22, 29],
      saturdays: [2, 9, 16, 23, 30],
      sundays: [3, 10, 17, 24, 31],
    },
  ]);
  console.log(calendarArray[0].name);
  console.log(calendarArray[0].days);
  return (
    <div className="advertising">
      <img
        className="advertising-image"
        src={require("../images/poslanie-ru.png")}
        alt="Poslanie"
      />
      <img
        className="advertising-image"
        src={require("../images/pravosudie_kazahstana_rus.png")}
        alt="Pravosudie"
      />
      <img
        className="advertising-image"
        src={require("../images/kommunikaciya_2.jpg")}
        alt="Kommunikaciya"
      />
      <img
        className="advertising-image"
        src={require("../images/teleproject-ru.png")}
        alt="Teleproject"
      />
      <div className="calendar">
        <h2>Календарь событий</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
          }}
        >
          <img src={require("../images/arrow-prev.png")} alt="" />
          <h2
            style={{
              textAlign: "center",
              fontWeight: "normal",
              color: "black",
              borderBottom: "none",
            }}
          >
            {calendarArray[1].name}{" "}
            <span style={{ color: "#939393" }}>2022</span>
          </h2>
          <img src={require("../images/arrow-right.png")} alt="" />
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              listStyle: "none",
            }}
          >
            <li>Пн</li>
            <li>Вт</li>
            <li>Ср</li>
            <li>Чт</li>
            <li>Пт</li>
            <li>Сб</li>
            <li>Вс</li>
          </ul>
        </div>
        <div className="days">
          <div>
            {calendarArray[1].mondays.map((monday) => {
              return <p>{monday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].tuesdays.map((tuesday) => {
              return <p>{tuesday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].wednesdays.map((wednesday) => {
              return <p>{wednesday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].thursdays.map((thursday) => {
              return <p>{thursday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].fridays.map((friday) => {
              return <p>{friday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].saturdays.map((saturday) => {
              return <p>{saturday}</p>;
            })}
          </div>
          <div>
            {calendarArray[1].sundays.map((sunday) => {
              return <p>{sunday}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
