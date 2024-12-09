export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"

  return password.split("").reverse().join("") + "encoded";
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"

  const length = encrypted.length;
  const substr = encrypted.substring(0, length - 7);
  return substr.split("").reverse().join("");
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }

  const resultUser = users.find((user) => user.email === email);

  if (!resultUser) throw new Error("User not found");
  return resultUser;
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect

  // try {
  const decodedPassword = decodePassword(encrypted);
  if (password !== decodedPassword) throw new Error("Invalid password");
  return true;
  // } catch (err) {
  //   throw err;
  // }
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"

  try {
    const resultUser = await getUserByEmail(email);

    const checkPassword = await verifyPassword(password, resultUser.password);

    if (checkPassword) {
      return {
        name: resultUser.name,
        username: resultUser.username,
        email: resultUser.email,
        token: "token",
      };
    }
  } catch (err) {
    return err.message;
  }
};
