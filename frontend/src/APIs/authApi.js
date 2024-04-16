// Mock user data
const userData = {
  _id: { $oid: "658c802703f91619a7b80cbc" },
  name: "Nikita",
  email: "test@gmail.com",
  password: "test",
  __v: { $numberInt: "0" },
};

// Mock signin function
export const signin = (payload) => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous request
    setTimeout(() => {
      if (
        payload.email === userData.email &&
        payload.password === userData.password
      ) {
        // Successful login
        resolve({ result: true, user: userData });
      } else {
        // Failed login
        reject({ result: false, message: "Invalid email or password" });
      }
    }, 1000); // Simulate delay of 1 second
  });
};
