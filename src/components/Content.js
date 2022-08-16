import "../styles/Content.css";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

export function Content() {
  return (
    <div className="content">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
