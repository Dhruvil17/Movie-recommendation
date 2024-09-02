const Card = ({ movie }) => {
    const date = new Date(movie.releasedDate * 1000);
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
    });
    const vote =
        (movie?.upVoted?.length || 0) - (movie?.downVoted?.length || 0);

    const truncateStarring = (stars) => {
        const fullText = stars.join(", ");
        return fullText.length > 14
            ? fullText.substring(0, 14) + "..."
            : fullText;
    };

    return (
        <div className="bg-white cursor-pointer shadow-lg m-4 p-5 border border-gray-200 rounded-xl hover:shadow-2xl transition-shadow duration-200 ">
            <div className="flex">
                <div className="flex flex-col items-center justify-center pr-4">
                    <p className="text-2xl my-[50%]">⬆️</p>
                    <span className="text-lg my-[25%]">{vote}</span>
                    <p className="text-2xl my-[50%]">⬇️</p>
                </div>
                <div>
                    <img
                        className="h-56 w-40 rounded-lg object-fill"
                        src={movie.poster}
                        alt="movie"
                    />
                </div>
                <div className="pl-[4%]">
                    <p className="text-2xl mb-2">{movie.title}</p>
                    <p>
                        <span className="font-bold">Genre: </span>
                        {movie.genre}
                    </p>
                    <p>
                        <span className="font-bold">Director: </span>
                        {movie.director.join(", ")}
                    </p>
                    <p>
                        <span className="font-bold">Starring: </span>
                        {truncateStarring(movie.stars)}
                    </p>
                    <p>
                        <span>
                            {"Mins" +
                                " | " +
                                movie.language +
                                " | " +
                                formattedDate}
                        </span>
                    </p>
                    <p className="text-blue-500 my-1">
                        <span>
                            {movie.pageViews +
                                " views" +
                                " | " +
                                "Voted by " +
                                movie.totalVoted +
                                " people"}
                        </span>
                    </p>
                </div>
            </div>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 mt-[4%] w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                Watch Trailer
            </button>
        </div>
    );
};

export default Card;
