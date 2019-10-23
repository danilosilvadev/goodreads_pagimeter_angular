import { Injectable } from "@angular/core";
import axios, { AxiosPromise } from "axios";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:5000";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    // axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  }

  getUserData(): AxiosPromise {
    return axios.get(`api/current_user`).then(res => {
      return res.data;
    });
  }
}
