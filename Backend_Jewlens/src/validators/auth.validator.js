export const validateRegister = ({ name, email, phone, address, password }) => {
  if (!name || !email || !phone || !address || !password) {
    return "All fields are required";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email";
  }

  if (phone.trim().length < 10) {
    return "Please enter a valid phone number";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

export const validateLogin = ({ email, password }) => {
  if (!email || !password) {
    return "Email and password are required";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email";
  }

  return null;
};
