 
import axios from "axios";

const register = async (email, password, password_confirmation) => {
  try {
    const response = await axios.post("/auth", {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    });
    return { registered: true };
  } catch (error) {
  return { registered: false /*, message: response */ };
  }
};

export { register }