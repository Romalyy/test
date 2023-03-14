import axios from "axios";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacter = async () => {
  const { data } = await instance.get("/character");
  return data;
};

export const getCharacterById = async (id) => {
  const { data } = await instance.get(`/character/${id}`);
  return data;
}

export const getLocation = async (id) => {
  const { data } = await instance.get(`/location/${id}`);
  return data;
};