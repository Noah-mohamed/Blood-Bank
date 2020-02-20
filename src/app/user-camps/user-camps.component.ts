import { Component, OnInit } from "@angular/core";
import { CampsService } from "../camps.service";

@Component({
  selector: "app-user-camps",
  templateUrl: "./user-camps.component.html",
  styleUrls: ["./user-camps.component.scss"]
})
export class UserCampsComponent implements OnInit {
  camps;
  constructor(_CampsService: CampsService) {
    this.camps = _CampsService.camps;
  }

  ngOnInit() {
    console.log(this.camps);
  }
}
