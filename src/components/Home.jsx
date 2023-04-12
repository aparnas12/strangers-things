import AllPosts from "./AllPosts";


const Home = (props) => {

    const {isLoggedIn,currentUser,postsList,setPostsList} =props;

    return (
      isLoggedIn? (
      <>
      <h1> Hello {currentUser.username}, Welcome back</h1>
      <AllPosts  postsList={postsList}
            setPostsList={setPostsList}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}/>
      </>
      
      )
      : <h1>Welcome! Please login to get started</h1>
    );
}
export default Home;