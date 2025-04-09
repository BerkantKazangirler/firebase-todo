import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DataProvider, UserListProvider } from "@/context";
import TitleProvider from "./context/titles";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <TitleProvider>
      <UserListProvider>
        <App />
      </UserListProvider>
    </TitleProvider>
  </DataProvider>
);
