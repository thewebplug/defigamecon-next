import axios from "axios";


  
export const getAllEvents = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/events`
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getEvent = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/events/${id}`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createEvent = async (
  data,
  token,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/events`, data,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const updateEvent = async (
  id,
  data,
  token,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/events/${id}`, data,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const deleteEvent = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/events/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const createGame = async (
  data,
  token,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/games`, data,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const updateGame = async (
  id,
  data,
  token,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/games/${id}`, data,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getAllGames = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/games`
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getGame = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/games/${id}`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const deleteGame = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/games/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const login = async (
  username,
  password
) => {
  try {
    const res = await axios.post(
      // `${process.env.REACT_APP_DEV_URL}/auth/login`, {
      `${process.env.NEXT_PUBLIC_URL}/auth/login`, {
      username,
      password
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};