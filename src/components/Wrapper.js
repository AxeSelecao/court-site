import { Content } from "./Content";
import { Support } from "./Support";

export function Wrapper() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Content />
      <Support />
    </div>
  );
}
