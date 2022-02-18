import axios from "axios";

const apiUrl = "http://localhost:5001/api/";

export const signupPost = async (formData) => {
  try {
    const {data} = await axios.post(apiUrl + "user/signup", formData);
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
};
export const loginPost = async (formData) => {
  try {
    const { data } = await axios.post(apiUrl + "user/login", formData);
    console.log(data);

    if (data) {
      return data;
    }

  } catch (err) {
    throw err;
  }
};

export const verifySignupOtp = async (formData, token) => {
  try {
    console.log(token);
    const { data } = await axios.put(apiUrl + "user/otp", formData, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }

    });

    console.log(data);
    if (data)
    {return data};
  } catch (err) {
    throw err;
  }
};

// export const verifyPhoneOtp = async (formData) => {
//   try {
//     const { data } = await axios.put( apiUrl + "user/authenticate/phoneotp",
//       formData
//     );
//     console.log(data);
//     if (data) {
//       return data;
//     }
//   } catch (err) {
//     throw err;
//   }
// };

export const setUpAxiosHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
}

export const verifyLoginOtp = async (formData) => {
  try {
    const { data } = await axios.post(
      apiUrl + "user/authenticate/verifyLogin",
      formData
    );
    console.log(data);
    if (data) {
      return data;
    }
  } catch (err) {
    throw err;
  }
};



export const productListing = async (data, id) => {
  try {
    await axios.post(apiUrl + "create/product/" + id, data);
  } catch (err) {
    throw err;
  }
}