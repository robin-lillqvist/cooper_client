import axios from "axios";

const register = async (email, password, password_confirmation) => {
  try {
    const response = await axios.post("/auth/sign_up", {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    });
    await storeAuthCredentials(response);
    return { registered: true };
    console.log('Returned data:', response);
  } catch (e) {
    console.log(`Axios request failed: ${e}`);
  }
};

const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    client: headers["client"],
    access_token: headers["access-token"],
    expiry: headers["expiry"],
    token_type: "Bearer"
  };
  sessionStorage.setItem("credentials", JSON.stringify(credentials));
};

export { register }