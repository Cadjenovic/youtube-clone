import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import Home from "./Home";

const App = () => {
    return (
        <div className="App">
            <Home />
        </div>
    );
};

export default App;
