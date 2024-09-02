import { useContext } from "react";
import UserContext from "../utils/UserContext";

const CompanyInfo = () => {
    const { loggedInUser } = useContext(UserContext);

    return loggedInUser ? (
        <div className="mt-[5%] mx-[10%] text-lg">
            <p className="my-4">
                <span className="font-bold">Company:</span> Geeksynergy
                Technologies Pvt Ltd
            </p>
            <p className="my-4">
                <span className="font-bold">Address:</span> Sanjayanagar,
                Bengaluru-56
            </p>
            <p className="my-4">
                <span className="font-bold">Phone:</span> XXXXXXXXX09
            </p>
            <p className="my-4">
                <span className="font-bold">Email:</span> XXXXXX@gmail.com
            </p>
        </div>
    ) : (
        <p className="mx-[8%]">Please SignIn to the application!</p>
    );
};

export default CompanyInfo;
