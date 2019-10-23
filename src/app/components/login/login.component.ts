import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  inputControl = new FormControl("");
  email: string = "";
  password: string = "";

  constructor() {}

  displayText() {}

  ngOnInit() {}
}
