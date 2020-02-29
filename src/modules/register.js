 
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
<<<<<<< HEAD
  return { registered: false /*, message: error.response.data.errors[0] */ };
=======
  return { registered: false /*, message: response */ };
>>>>>>> 89c80ddb1202019020995ee656307ab1b347064f
  }
};

export { register }