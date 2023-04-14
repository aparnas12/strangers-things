import AllPosts from "./AllPosts";


const Home = (props) => {

  const { isLoggedIn, currentUser } = props;
  
  return (
    <>
      {isLoggedIn ? <h2>Hello {currentUser}, Welcome back</h2>
        :
        <h2>Welcome! Please login to get started</h2>

      }
    </>
  );
}
export default Home;
