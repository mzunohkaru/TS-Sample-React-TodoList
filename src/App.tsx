import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./routers/NotFound";

import Top from "./routers/Top";
import Todo from "./routers/Todo";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
       </Routes>
      </header>
    </div>
  );
};

export default App;
