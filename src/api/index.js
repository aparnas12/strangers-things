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
const fakePosts = {

  "success": true,
  "error": null,
  "data": {
    "posts": [
      {
        "location": "[On Request]",
        "willDeliver": false,
        "messages": [],
        "active": true,
        "_id": "642762a8cd3bfb001620064e",
        "author": {
          "_id": "642762a8cd3bfb0016200648",
          "username": "joe1234"
        },
        "cohort": "642762a8cd3bfb0016200646",
        "title": "Practically new Stradivarius",
        "description": "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        "price": "$14.3 million",
        "createdAt": "2023-03-31T22:46:00.837Z",
        "updatedAt": "2023-03-31T22:46:00.880Z",
        "__v": 0,
        "isAuthor": false
      },
      {
        "location": "[On Request]",
        "willDeliver": true,
        "messages": [],
        "active": true,
        "_id": "642762a8cd3bfb001620064f",
        "author": {
          "_id": "642762a8cd3bfb0016200649",
          "username": "jane1234"
        },
        "cohort": "642762a8cd3bfb0016200646",
        "title": "Golden Retriever puppies",
        "description": "Not looking for any money, just want to find a good home for these four beautiful pups.",
        "price": "free",
        "createdAt": "2023-03-31T22:46:00.837Z",
        "updatedAt": "2023-03-31T22:46:00.886Z",
        "__v": 0,
        "isAuthor": false
      },
      {
        "location": "Ames, IA",
        "willDeliver": true,
        "messages": [],
        "active": true,
        "_id": "642762a8cd3bfb0016200650",
        "author": {
          "_id": "642762a8cd3bfb001620064a",
          "username": "caesar1234"
        },
        "cohort": "642762a8cd3bfb0016200646",
        "title": "NordicTrack Freestrider Elliptical Trainer",
        "description": "To be honest, it is more amazing than my resolve.",
        "price": "$1400, OBO",
        "createdAt": "2023-03-31T22:46:00.837Z",
        "updatedAt": "2023-03-31T22:46:00.891Z",
        "__v": 0,
        "isAuthor": false
      }
    ]
  }

}

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

export const addNewPost = async (newPostObj, token) => {

  try {
    
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newPostObj),
    });
    const result = await response.json();
    console.log("The result of addNewPost is: ",result);
    return result
  } catch (err) {
    console.error(err);
  }
}