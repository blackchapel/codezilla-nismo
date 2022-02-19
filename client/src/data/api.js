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


export const setUpAxiosHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
}


// let ip = "";
// const getData = async () => {
//   const res = await axios.get('https://geolocation-db.com/json/')
//   ip = res.data.IPv4;
// }

export const getAirInfo = async () => {
  
  try {
    const res = await axios.get('https://geolocation-db.com/json/')
    // const ip = res.data.IPv4;
    const {data} = await axios.get(apiUrl + "data/climate", res.data.IPv4);
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
}