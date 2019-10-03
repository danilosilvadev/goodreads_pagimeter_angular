import { Injectable } from "@angular/core";
import axios, { AxiosPromise } from "axios";

@Injectable({
  providedIn: "root"
})
export class GetCountersService {
  headerKey: { key: string; secret: string } = {
    key: "uvBjettNEXyJxHqjekxceA",
    secret: "3U4hslb1F9ocO0exNyjG3V62Hjl4MQnNPXoNVqLZoRY"
  };

  constructor() {
    axios.defaults.baseURL = "https://www.goodreads.com";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  }

  getCounters(id: string): AxiosPromise {
    console.log("pegou o texto", id);
    return axios
      .get(`/author/show.xml?key=${this.headerKey.key}&id=38550`, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res.data;
      });
  }
}
