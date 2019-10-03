import { Component, OnInit } from "@angular/core";
import { GetCountersService } from "../../services/get-counters.service";
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

  constructor(private GetCountersService: GetCountersService) {}

  displayText() {
    this.GetCountersService.getCounters(this.inputControl.value);
  }

  ngOnInit() {}
}
