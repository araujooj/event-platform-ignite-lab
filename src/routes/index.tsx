import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/event/lesson/abertura-evento-ignite-lab" />}
      />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
