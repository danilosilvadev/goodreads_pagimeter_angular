import { Component, OnInit } from "@angular/core";
import { GetCountersService } from "../../services/get-counters.service";
import { UserDataService } from "../../services/user-data.service";
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  inputControl = new FormControl("");
  text: string = "";

  constructor(
    private GetCountersService: GetCountersService,
    private GetUserDataService: UserDataService
  ) {}

  displayText(e) {
    e.preventDefault();
    this.GetCountersService.getCounters(this.inputControl.value);
  }

  ngOnInit() {
    console.log("entrou no ngOnInit");
    this.GetUserDataService.getUserData().then(res => {
      console.log(res, "resposta da API");
    });
  }
}
