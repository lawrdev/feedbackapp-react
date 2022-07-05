import { BrowserRouter as Router } from "react-router-dom";
import { FeedbackProvider } from './context/FeedbackContext'
import Main from "./components/Main";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="font-body">
          <Main />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
