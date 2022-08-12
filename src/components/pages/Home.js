import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home(){

    return (
    <>
        <UserSearch/>
        {/* SEARCH COMPONENT */}
        <UserResults/>
    </>
    )
}

export default Home;