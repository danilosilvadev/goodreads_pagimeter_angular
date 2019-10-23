import { Component } from "@angular/core";
import { isDevMode } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "pagimeterAngular";

  ngOnInit(): void {
    if (isDevMode()) {
      console.log("esta em devlopment mode");
    }
  }
}
