import Users from "../pages/Users";
import Jobs from "../pages/Jobs";
import Posts from "../pages/Posts";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 w-full">
                <Posts />
            </div>
        </div>
    );
}

export default Dashboard;