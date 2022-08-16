import "../styles/Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="top-header width-header">
        <ul className="top-header-navs">
          <li>Послания Президента</li>
          <li>Государственные символы</li>
          <li>Сайт Президента</li>
          <li>
            <img src={require("../images/strategy2050.png")} alt="" /> Казахстан
            2050
          </li>
        </ul>
      </div>
      <div className="mid-header width-header">
        <div className="site-name">
          <img
            style={{ width: "100px", height: "55px" }}
            src={require("../images/logo-region.png")}
            alt="Главная"
          />
          <h3>
            Верховный суд республики <br /> Казахстан
          </h3>
        </div>
        <div className="mid-header-navs">
          <div className="mid-header-navs-column">
            <div className="mid-header-nav">
              <p>
                Блог председателя <br /> Верховного суда РК
              </p>
              <img src={require("../images/blog-ico.png")} alt="" />
            </div>
            <div className="mid-header-nav">
              <p>
                Академия правосудия при <br /> Верховном суде РК
              </p>
              <img src={require("../images/academy-ico.png")} alt="" />
            </div>
          </div>
          <div className="mid-header-navs-column">
            <div className="mid-header-nav">
              <p>Прием граждан</p>
              <img src={require("../images/soviet-ico.png")} alt="" />
            </div>
            <div className="mid-header-nav">
              <p>Союз Судей РК</p>
              <img src={require("../images/union-ico.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bott-header width-header">
        <ul>
          <li>
            <a href="https://sud.gov.kz/rus/content/sudebnaya-sistema-0">
              Судебная система
            </a>
          </li>

          <li>
            <a href="https://sud.gov.kz/rus/content/deyatelnost">
              Деятельность
            </a>
          </li>
          <li>
            <a href="https://sud.gov.kz/rus/news">Пресс-центр</a>
          </li>
          <li>
            <a href="#">Отчетная работа</a>
          </li>
          <li>
            <a href="#">База знаний</a>
          </li>
          <li>
            <a href="#">Кодификация</a>
          </li>
          <li>
            <a href="#">Международные мероприятия</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
