import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="766125382804-6er8mqc3k8pu41boifcn9cs9o69eh2tn.apps.googleusercontent.com">
        <ParentComponent />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
