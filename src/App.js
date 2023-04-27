import logo from "./logo.svg";
import "./App.css";
import DesignCard from "./components/Design";
import { Box } from "@mui/material";
function App() {
  const poductImage =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80";

  return (
    <div className="App">
      <Box sx={{ mt: 4 }}>
        <DesignCard image={poductImage} />
      </Box>
    </div>
  );
}

export default App;
