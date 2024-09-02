import Card from "./Card";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
    const [movies, setMovies] = useState([]);
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser));
        }

        const fetchData = () => {
            fetch("https://hoblist.com/api/movieList", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    category: "movies",
                    language: "kannada",
                    genre: "all",
                    sort: "voting",
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        fetchData();
    }, [setLoggedInUser]);

    return (
        <div className="mt-4 mx-[7%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {loggedInUser ? (
                movies?.result?.map((movie) => (
                    <div key={movie._id}>
                        <Card movie={movie} />
                    </div>
                ))
            ) : (
                <p className="mx-[8%]">Please SignIn to the application!</p>
            )}
        </div>
    );
};

export default Body;
