import { Component, OnInit } from "@angular/core";
import { list } from "src/app/models/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  list: list[] = [
    {
      name: "shelf one",
      number: 10,
      id: "01"
    },
    {
      name: "shelf two",
      number: 17,
      id: "01"
    },
    {
      name: "shelf three",
      number: 30,
      id: "01"
    },
    {
      name: "shelf four",
      number: 3,
      id: "01"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
