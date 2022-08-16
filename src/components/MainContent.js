import { News } from "./News";
import { Advertising } from "./Advertising";

export function MainContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <News />
      <Advertising />
    </div>
  );
}
