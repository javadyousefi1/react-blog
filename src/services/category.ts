import axios from "./axios";

export async function getAllCatories() {
  const { data } = await axios.get("/category/get-all-categories");
  return data;
}
