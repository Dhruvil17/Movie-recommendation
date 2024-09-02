import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    );
};

const App = () => {
    return (
        <UserProvider>
            <div className="App">
                <Header />
                <Outlet />
            </div>
        </UserProvider>
    );
};

export default App;
