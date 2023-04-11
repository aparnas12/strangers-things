const BASE = 'https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft'

// export async function getMe() {

//   try {
//     const response= await fetch(`${ BASE }/users/me`);
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getAllPosts() {
  try {
    const response= await fetch(`${ BASE }/posts`);
    const postsList = await response.json();
    console.log(postsList.data.posts);
    return postsList.data.posts;
  } catch (error) {
    throw error;
  }
}

