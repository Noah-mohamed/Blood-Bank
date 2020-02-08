import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class CampsService {
    createMode = true;
  editMode = false;
  campsCont: any[] = [];
  selectedIndex;
camps:any[]
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
    $("body,html").animate({ scrollTop: 0 }, 600);
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
}
