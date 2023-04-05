import { Routes, Route } from 'react-router-dom';
import Error404Page from './pages/404';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ChatPage />} path="/chat" />
      <Route element={<Error404Page />} path="*" />
    </Routes>
  );
}
