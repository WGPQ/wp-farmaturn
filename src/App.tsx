import { useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  const content = useRoutes(router);
  return (
    <div>
      {content}
    </div>
  )
}

export default App
