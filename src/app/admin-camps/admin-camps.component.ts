import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-admin-camps",
  templateUrl: "./admin-camps.component.html",
  styleUrls: ["./admin-camps.component.scss"]
})
export class AdminCampsComponent implements OnInit {
  createMode = true;
  editMode = false;
  campsCont: any[] = [];
  selectedIndex;

  campData = new FormGroup({
    campTitle: new FormControl(""),
    campOrganizer: new FormControl(""),
    campState: new FormControl(""),
    campPhone: new FormControl(""),
    campCity: new FormControl(""),
    campComment: new FormControl("")
  });

  submit() {
    if (this.editMode == true) {
      this.campsCont[this.selectedIndex] = this.campData.value;
      this.createMode = true;
      this.editMode = false;
    } else {
      this.campsCont.push(this.campData.value);
    }
  }

  deleteCamp(index) {
    this.campsCont.splice(index, 1);
  }

  editCamp(index, camp) {
    // $("body,html").animate({ scrollTop: 0 }, 600);
    this.editMode = true;
    this.createMode = false;
    this.campData.controls["campTitle"].setValue(camp.campTitle);
    this.campData.controls["campOrganizer"].setValue(camp.campOrganizer);
    this.campData.controls["campState"].setValue(camp.campState);
    this.campData.controls["campPhone"].setValue(camp.campPhone);
    this.campData.controls["campCity"].setValue(camp.campCity);
    this.campData.controls["campComment"].setValue(camp.campComment);
    this.selectedIndex = index;
  }

  cancleEdit() {
    this.editMode = false;
    this.createMode = true;
  }

  constructor() {}

  ngOnInit() {
    // $(window).ready(function() {
    //   $(".navbar").removeClass("fixed-top");
    //   $(".navbar").addClass("bg-dark");
    // });
  }
}
