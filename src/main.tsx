import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DataProvider, UserListProvider } from "@/contexts";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <UserListProvider>
      <App />
    </UserListProvider>
  </DataProvider>
);
