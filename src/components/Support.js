import "../styles/Support.css";

export function Support() {
  return (
    <div style={{ width: "22%", textAlign: "center", background: "#22273f" }}>
      <input
        style={{
          width: "100%",
          padding: "8px",
          height: "36px",
          outline: "none",
        }}
        placeholder="Поиск по сайту"
      />
      <div className="top-support">
        <div className="region-section">
          <img
            style={{ marginLeft: "8px" }}
            src={require("../images/map-mark.png")}
            alt=""
          />
          <h2
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Суды по регионам
          </h2>
        </div>
        <div
          style={{
            width: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#39405b",
          }}
        >
          <img src={require("../images/eye.png")} alt="" />
        </div>
        <div className="languages" style={{ width: "20%" }}>
          <p>қаз</p>
          <p>рус</p>
          <p>eng</p>
        </div>
      </div>
      <div className="call-support">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            paddingRight: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginLeft: "5px" }}
              src={require("../images/phone-ico.png")}
              alt="phone icon"
            />
            <h2
              style={{
                fontSize: "30px",
                height: "30px",
                lineHeight: "25px",
                paddingLeft: "5px",
                color: "white",
              }}
            >
              1401
            </h2>
          </div>
          <p style={{ color: "white", marginTop: "10px", fontSize: "15px" }}>
            +7(7172)710000
          </p>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              lineHeight: "14px",
              fontWeight: "bold",
              height: "13px",
              color: "#bcbdc1",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            Call-центр
          </h3>
          <p
            style={{
              whiteSpace: "nowrap",
              fontStyle: "italic",
              fontSize: "15px",
              color: "#aaabb0",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "9px",
            }}
          >
            С городских бесплатно
          </p>
          <p
            style={{
              whiteSpace: "nowrap",
              fontStyle: "italic",
              fontSize: "15px",
              color: "#aaabb0",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            С мобильных номеров платно
          </p>
        </div>
      </div>
      <div className="social-media-support">
        <div className="general-support">
          <div className="judge-cabinet">
            <div className="judge-cabinet-text">
              <h3>Судебный кабинет</h3>
              <p>9 449 421</p>
            </div>
            <img src={require("../images/court-office-ico.png")} alt="" />
          </div>
          <div className="general-info-support">
            <div>
              <p>© Верховный Суд Республики Казахстан, 2022</p>
              <p style={{ color: "#bdcbe7", textDecoration: "underline" }}>
                Правила использования материалов | О конфиденциальности
              </p>
            </div>
            <div style={{ marginTop: "15px" }}>
              <p>Ошибка в тексте?</p>
              <p>
                Выделите и нажмите <br /> Ctrl + Enter
              </p>
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginTop: "3px" }}>
                <img
                  style={{ width: "22px", height: "25px" }}
                  src={require("../images/IOS.png")}
                  alt=""
                />
                <img
                  style={{ width: "20px", height: "25px" }}
                  src={require("../images/ANDROID.png")}
                  alt=""
                />
              </div>
              <p style={{ margin: "0 10px" }}> | </p>
              <p style={{ color: "#bdcbe7", textDecoration: "underline" }}>
                Карта сайта
              </p>
            </div>
          </div>
          <img
            style={{ width: "100%", marginTop: "40px" }}
            src={require("../images/master_phd.jpg")}
            alt=""
          />
        </div>
        <div></div>
        {/*<div className="social-media">
			<a >VK</a>
		  </div>*/}
      </div>
    </div>
  );
}
