import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuditResult from "./pages/AuditResults";
import ShareAudit from "./pages/ShareAudit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<AuditResult />} />
      <Route path="/share/:id" element={<ShareAudit />} />
    </Routes>
  );
}

export default App;