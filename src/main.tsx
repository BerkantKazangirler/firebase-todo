import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DataProvider, TitleProvider, UserListProvider } from "@/context";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <TitleProvider>
      <UserListProvider>
        <App />
      </UserListProvider>
    </TitleProvider>
  </DataProvider>
);
