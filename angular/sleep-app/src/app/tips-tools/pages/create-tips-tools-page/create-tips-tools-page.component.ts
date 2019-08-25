import { Component, OnInit } from "@angular/core";
import { TipsToolsService } from "../../../core/services/tips-tools.service";
import { Router } from "@angular/router";
import { Tiptool } from "../../../core/models/Tiptool";
import { QuizEmptyAnswersComponent } from "../../../quiz/components/quiz-empty-answers/quiz-empty-answers.component";
import { MatDialog } from "@angular/material";
import { TipsEmptyAnswersComponent } from "../../components/tips-empty-answers/tips-empty-answers.component";
@Component({
  selector: "app-create-tips-tools-page",
  templateUrl: "./create-tips-tools-page.component.html",
  styleUrls: ["./create-tips-tools-page.component.scss"]
})
export class CreateTipsToolsPageComponent implements OnInit {
  tip_tool: Tiptool = { id: "", title: "", content: "" };
  constructor(
    private dialog: MatDialog,
    private tipstoolsService: TipsToolsService,
    private router: Router
  ) {}

  ngOnInit() {}

  createTipsTools(title, content) {
    if (!this.checkEmptyInputs()) {
      // If something is written down
      // If we put something in the text inputs fields
      this.tipstoolsService.addTipsTool(title, content).subscribe(
        data => {
          this.tip_tool = data;
          this.router.navigate(["/tips-tools/tips"]);
        },
        (err: Error) => {
          console.log(err);
        }
      );
    } else {
      // If inputs are empty
      console.log("show error page");
      const dialogRef = this.dialog.open(TipsEmptyAnswersComponent, {
        width: "500px"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log("Close");
      });
      dialogRef.updatePosition({ top: "150px", left: "30px" });
    }
  }

  checkEmptyInputs() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        // Text inputs are empty
        console.log("Inputs are empty");
        return true;
      }
    }
    console.log("Something is written down. Good to go!");
    return false; // We can submit the form
  }
}
