// Mock user data
const userData = [
  {
    _id: "658c802703f91619a7b80cbc",
    name: "Nikita",
    email: "test@gmail.com",
    password: "test",
    __v: 0,
  },
  {
    _id: "658c802703f91619a7b80cb88",
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin",
    __v: 0,
  },
];

// Mock signin function
export const signin = (payload) => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous request
    setTimeout(() => {
      const user = userData.find(
        (u) => u.email === payload.email && u.password === payload.password
      );

      if (user) {
        // Successful login
        resolve({ result: true, user });
      } else {
        // Failed login
        reject({ result: false, message: "Invalid email or password" });
      }
    }, 1000); // Simulate delay of 1 second
  });
};
