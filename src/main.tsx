import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { UserListProvider } from "@/components";

createRoot(document.getElementById("root")!).render(
  <UserListProvider>
    <App />
  </UserListProvider>
);
