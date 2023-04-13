import AllPosts from "./AllPosts";


const Home = (props) => {

  const { isLoggedIn, currentUser } = props;
  console.log(isLoggedIn);
  console.log(currentUser);
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
