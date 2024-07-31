import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "helpers/AuthContext";
import Layout from "./layout";
import Chat from "pages/Chat";
import Assistants from "pages/Assistants";
import Completions from "pages/Completions";
import { RequireGuest, RequireAuth } from "helpers/auth";
import Login from "pages/Login";
import NotFound from "pages/NotFound"; // Ensure you have a NotFound page

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAuthState(!!token);
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<RequireAuth />}>
              <Route path="/chat" element={<Chat />} />
              <Route path="/assistant" element={<Assistants />} />
              <Route path="/completion" element={<Completions />} />
            </Route>

            <Route element={<RequireGuest />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Layout>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

//             <Route index element={<Navigate to="/chat" replace />} />
