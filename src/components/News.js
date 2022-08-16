import "../styles/News.css";

export function News() {
  return (
    <div style={{ width: "73%" }}>
      <div className="news-overlay">
        <div className="overlay-description">
          <div className="overlay-text">
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "11px",
                marginBottom: "12px",
              }}
            >
              01.07.2022
            </p>
            <h3
              style={{
                color: "white",
                textAlign: "justify",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              Судьи и адвокаты предметно обсудили вопросы правосудия
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "13px",
                textAlign: "justify",
              }}
            >
              Сегодня в расширенном составе судей и адвокатов Казахстана
              состоялось обсуждение актуальных проблем правосудия. Руководство
              Верховного Суда провело встречу с председателем Республиканской
              коллегии...
            </p>
          </div>
        </div>
        <img
          style={{ width: "50%", height: "320px" }}
          src={require("../images/press-conference.jpg")}
          alt="news"
        />
      </div>
      <div className="news">
        <div>
          <h3
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#ff8322",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "40px",
            }}
          >
            Последние новости
          </h3>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "91%",
                margin: "0 auto",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#a3a3a3",
                    fontSize: "11px",
                    marginBottom: "12px",
                  }}
                >
                  01.07.2022 - 18:21
                </p>
                <h3
                  style={{
                    color: "#1166a7",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Судьи и адвокаты предметно обсудили вопросы правосудия
                </h3>
                <p
                  style={{
                    color: "#222",
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  Сегодня в расширенном составе судей и адвокатов Казахстана
                  состоялось обсуждение актуальных проблем правосудия.
                  Руководство Верховного Суда провело встречу с председателем
                  Республиканской коллегии...
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#a3a3a3",
                    fontSize: "11px",
                    marginBottom: "12px",
                  }}
                >
                  24.06.2022 - 18:52
                </p>
                <h3
                  style={{
                    color: "#1166a7",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Уважаемые коллеги!
                </h3>
                <p
                  style={{
                    color: "#222",
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  От всего сердца поздравляю вас с праздником – с Днем судьи и
                  работника суда! Согласно постановлению Правительства №183 от
                  31 марта 2022 года мы отмечаем новый профессиональный наш
                  праздник с 24 июня...
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "91%",
                margin: "0 auto",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#a3a3a3",
                    fontSize: "11px",
                    marginBottom: "12px",
                  }}
                >
                  28.06.2022 - 19:01
                </p>
                <h3
                  style={{
                    color: "#1166a7",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Журналисты и медиа активные юристы награждены за вклад в
                  продвижение судебных реформ
                </h3>
                <p
                  style={{
                    color: "#222",
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  Сегодня в Верховном Суде с участием представителей ведущих СМИ
                  и медиа активных юристов состоялась панельная дискуссия о
                  текущем состоянии правосудия. Мероприятие приурочено к
                  30-летию судебной...
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#a3a3a3",
                    fontSize: "11px",
                    marginBottom: "12px",
                  }}
                >
                  24.06.2022 - 18:45
                </p>
                <h3
                  style={{
                    color: "#1166a7",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  В Верховном Суде торжественно отметили День судьи и работника
                  суда
                </h3>
                <p
                  style={{
                    color: "#222",
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  Сегодня в Верховном Суде состоялось торжественное мероприятие
                  по случаю 30-летия судебной системы Казахстана, а также Дня
                  судьи и работника суда. Профессиональный праздник
                  представители судов...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news-pages">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "45%",
              margin: "0 auto",
              fontSize: "13px",
              color: "#1166a7",
            }}
          >
            <p style={{ color: "black" }}>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>следующая ›</p>
            <p>последняя »</p>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#1166a7",
              textAlign: "right",
              marginRight: "50px",
				  padding: '10px 0 20px'
            }}
          >
            Смотреть все
          </p>
        </div>
      </div>
    </div>
  );
}
