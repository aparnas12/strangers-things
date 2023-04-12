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
    const response = await fetch(`${BASE}/posts`);
    const postsList = await response.json();
    console.log(postsList.data.posts);
    return postsList.data.posts;
  } catch (error) {
    throw error;
  }
}


export const loginUser = async (userObject) => {
  try {
    const response = await fetch(`${BASE}/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      }
    );

    const { success, error, data } = await response.json();

    if (success) {
      const { token, message } = data;
      localStorage.setItem('token', token);
      return { token, message };
    }
    if (!success && !error) {
      const { name, message } = data;
      return { name, message };
    }
    console.log(success, error, data);
  } catch (error) {
    console.error(error);
  }
};