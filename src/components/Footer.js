export function Footer() {
  return (
    <div
      style={{
        background: "white",
        borderTop: "1px solid #ccc",
        padding: "30px 0",
      }}
    >
      <img
        className="akorda"
        style={{ width: "170px", height: "116px", marginLeft: "100px" }}
        src={require("../images/akorda.jpg")}
        alt="Akorda.kz"
      />
    </div>
  );
}
