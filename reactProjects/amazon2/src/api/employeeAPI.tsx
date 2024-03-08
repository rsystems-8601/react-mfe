import axios from "axios";
const BASE_URL = "trends.com";

export interface userData {
  username: string,
  password: string
}
const getList =(payload: userData) => 
axios.post<userData>(`${BASE_URL}/getEmployeeList`, payload);

const employeeAPI = {
  getList
}
export default employeeAPI;