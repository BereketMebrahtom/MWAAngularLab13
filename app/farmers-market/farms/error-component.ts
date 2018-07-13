import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  template: `
<p style="color: red">the farm you are looking for doesn't exist.
</p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
