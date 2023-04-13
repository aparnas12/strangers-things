const BASE = 'https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft'


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

 export const getMe = async (token) => {

  try {
    const response = await fetch(`${BASE}/users/me`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
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


export const addNewPost = async (newPostObj, token) => {
  console.log("new post object", newPostObj, "token" , token);
  try {
    
    const response = await fetch(`${BASE}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newPostObj),
    });
    console.log(response);
    const result = await response.json();
    console.log("The result of addNewPost is: ",result);
    return "result";
   // return result;
  } catch (err) {
    console.error(err);
  }
}


export const registerUser = async (userObject) => {
  try {
    const response = await fetch(`${BASE}/users/register`,
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