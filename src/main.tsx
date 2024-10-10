import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeedbackWidget } from "./components/widgets/feedback";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeedbackWidget projectId="test" />
  </StrictMode>
);
