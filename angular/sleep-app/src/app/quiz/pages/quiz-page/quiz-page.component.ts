import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../../core/models/User";
import { MatDialog, MatDialogRef } from "@angular/material";
import { QuizAnswersComponent } from "../../components/quiz-answers/quiz-answers.component";
import { QuizEmptyAnswersComponent } from "../../components/quiz-empty-answers/quiz-empty-answers.component";

@Component({
  selector: "app-quiz-page",
  templateUrl: "./quiz-page.component.html",
  styleUrls: ["./quiz-page.component.scss"]
})
export class QuizPageComponent implements OnInit {
  questions: Object; // Key value
  answers: Object;

  question1: any;
  question1_1: any;
  question2: any;
  question3: any;
  question4: any;
  question5: any;
  question6: any;

  answer1: any; // Question<Answers>
  answer2: any;
  answer3: any;
  answer4: any;
  answer5: any;
  answer6: any;

  question: HTMLElement;
  questionText: string;

  private user: User = {
    id: "",
    name: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    nicename: "",
    display_name: "",
    sleeptype: "",
    sleeptype_text: "",
    sleeptype_image: ""
  };

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  sendQuiz() {
    // Put a node-list directly in an array so we can work with it, create an array from a node-list
    this.question1 = Array.from(
      document.querySelectorAll('input[name="question1"]')
    );
    this.question2 = Array.from(
      document.querySelectorAll('input[name="question2"]')
    );
    this.question3 = Array.from(
      document.querySelectorAll('input[name="question3"]')
    );
    this.question4 = Array.from(
      document.querySelectorAll('input[name="question4"]')
    );
    this.question5 = Array.from(
      document.querySelectorAll('input[name="question5"]')
    );
    this.question6 = Array.from(
      document.querySelectorAll('input[name="question6"]')
    );

    // We loop over every question and put the answer into a variable
    this.question1.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question1: ${answer.value} ${index}`);
        this.answer1 = answer.value;
      }
    });
    this.question2.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question2: ${answer.value} ${index}`);
        this.answer2 = answer.value;
      }
    });
    this.question3.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question3: ${answer.value} ${index}`);
        this.answer3 = answer.value;
      }
    });
    this.question4.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question4: ${answer.value} ${index}`);
        this.answer4 = answer.value;
      }
    });
    this.question5.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question5: ${answer.value} ${index}`);
        this.answer5 = answer.value;
      }
    });
    this.question6.forEach((answer, index) => {
      if (answer.checked) {
        console.log(`Question6: ${answer.value} ${index}`);
        this.answer6 = answer.value;
      }
    });

    if (this.checkInputs()) {
      // if we selected any radio buttons

      // We give the answer as a parameter
      this.determineSleepType(
        this.answer1,
        this.answer2,
        this.answer3,
        this.answer4,
        this.answer5,
        this.answer6
      );
      // Navigate to the next page
      this.router.navigate(["/type-sleeper"]);
    } else {
      // If we didn't select any radio button
      // Show pop up and block the navigation
      const dialogRef = this.dialog.open(QuizEmptyAnswersComponent, {
        width: "500px"
        // data: { text: this.questionText } /* Show the text in the dialog box */
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log("Close");
      });
      dialogRef.updatePosition({ top: "150px", left: "30px" });
    }
  }

  showPopUpText(question) {
    this.question = document.getElementById(
      question
    ); /* Dynamically select the question */
    this.questionText = this.question.getAttribute(
      "data-text"
    ); /* get the extra text we added in the html tag */
    const dialogRef = this.dialog.open(QuizAnswersComponent, {
      width: "500px",
      data: { text: this.questionText } /* Show the text in the dialog box */
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Close");
    });
    dialogRef.updatePosition({ top: "30px", left: "30px" });
  }

  checkInputs() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        console.log("good to go");
        return true;
      }
    }
    console.log("woops nothing selected");
    return false;
  }

  /* Spaghetti Macaroni code I am sorry ;) */
  determineSleepType(answer1, answer2, answer3, answer4, answer5, answer6) {
    console.log(`${answer1}${answer2}${answer3}${answer4}${answer5}${answer6}`);
    // if (answer1 === 'I <3 it') {
    //   this.user.sleeptype = 'Sleep lover';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer1 === 'Is nodig maar ik heb er niet altijd even veel in in...') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer1 === 'Zo nutteloos, ik doe liever iets anders!') {
    //   this.user.sleeptype = 'Sleepyhead';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }

    // if (answer2 === 'Sowiesooo! Mij zie je voor 10u niet verschijnen!') {
    //   this.user.sleeptype = 'Sleepyhead';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer2 === 'Hoeft niet, ik word wakker op mijn vast uur') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer2 === 'Is voor mij niet later dan 9u-9u30') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }

    // if (answer3 === 'Ik lig vaak nog lang te woelen en te piekeren.') {
    //   this.user.sleeptype = 'Restless bat';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer3 === 'Ik slaap relatief snel in.') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer3 === 'Ik slaap vrijwel meteen in.') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }

    // if (answer4 === 'Zombie') {
    //   this.user.sleeptype = 'Sleepyhead';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer4 === 'Fris als "n vis') {
    //   this.user.sleeptype = 'Morning person';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer4 === 'Groggy maar dat gaat snel over') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }

    // if (answer5 === 'Blijf ik de hele dag door geeuwen.') {
    //   this.user.sleeptype = 'Panda';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer5 === 'Kom ik er meestal tegen de middag wel door.') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer5 === 'Word ik tegen de avond goed moe.') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }

    // if (answer6 === '#Gamingislive: tot ´s avonds laat!') {
    //   this.user.sleeptype = 'Screen addict';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer6 === '#nophone: Mijn GSM komt mijn kamer niet in!') {
    //   this.user.sleeptype = 'King of sleep';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // } else if (answer6 === '#Netlix: all night long') {
    //   this.user.sleeptype = 'Screen addict';
    //   console.log(this.user.sleeptype);
    //     localStorage.setItem('user_sleeptype', this.user.sleeptype);
    // }
    const morningPersonTitle = "Morning person";
    const sleepLoverTitle = "Sleep lover";
    const restlessBatTitle = "Restless bat";
    const screenAddictTitle = "Screen addict";
    const pandaTitle = "Panda";
    const sleepyHeadTitle = "Sleepyhead";
    const kingOfSleepTitle = "King of sleep";

    const morningPersonText =
      "Jij bent een echt ochtendmens! `s ochtends sta je steeds lekker fris op en zou je de wereld kunnen overslaan";
    const sleepLoverText =
      "Slapen is voor jouw het ultieme moment om te genieten. Sleep all day? Yes please!";
    const restlessBatText =
      "Jij wou wel willen goed slapen, maar soms lukt het je echt niet... Je ligt nog lang wakker, te piekeren of te woelen";
    const screenAddictText =
      "’s avonds uren gamen, netflixen of instagrammen? Dat ben jij! Doordat je ’s avonds niet weg te slaan bent van de schermen, verlies je soms kostbare uren slaap. ";
    const pandaText =
      "Geeuw… GEEEUWWW…. Geeuw… Moe in de klas? Moe in de zetel? Klinkt herkenbaar voor panda’s. Wat extra slaap kan je deugd doen! ";
    const sleepyHeadText =
      "Ochtenden zijn zo je ding niet… Magische truc om ochtenden draaglijker te maken? Vroeger in bed kruipen!";
    const kingOfSleepText =
      "Hé goed bezig! Jij vindt slaap belangrijk en probeert dit zo goed mogelijk te doen. Keep it up!";

    const morningPersonRoute =
      "../../../../../assets/images/morning_person.jpg";
    const sleepLoverRoute = "../../../../../assets/images/sleep_lover.jpg";
    const restlessBatRoute = "../../../../../assets/images/sleepless_bat.jpg";
    const screenAddictRoute = "../../../../../assets/images/screen_addict.jpg";
    const pandaRoute = "../../../../../assets/images/panda.jpg";
    const sleepyHeadRoute = "../../../../../assets/images/sleepyhead.jpg";
    const kingOfSleepRoute = "../../../../../assets/images/king_sleep.jpg";

    // Here we add the dialog box every time

    if (answer1 === "I <3 it") {
      this.user.sleeptype = sleepLoverTitle;
      this.user.sleeptype_text = sleepLoverText;
      this.user.sleeptype_image = sleepLoverRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (
      answer1 === "Is nodig maar ik heb er niet altijd even veel in in..."
    ) {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer1 === "Zo nutteloos, ik doe liever iets anders!") {
      this.user.sleeptype = sleepyHeadTitle;
      this.user.sleeptype_text = sleepyHeadText;
      this.user.sleeptype_image = sleepyHeadRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer2 === "Sowiesooo! Mij zie je voor 10u niet verschijnen!") {
      this.user.sleeptype = sleepyHeadTitle;
      this.user.sleeptype_text = sleepyHeadText;
      this.user.sleeptype_image = sleepyHeadRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer2 === "Hoeft niet, ik word wakker op mijn vast uur") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer2 === "Is voor mij niet later dan 9u-9u30") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer3 === "Ik lig vaak nog lang te woelen en te piekeren.") {
      this.user.sleeptype = restlessBatTitle;
      this.user.sleeptype_text = restlessBatText;
      this.user.sleeptype_image = restlessBatRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer3 === "Ik slaap relatief snel in.") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer3 === "Ik slaap vrijwel meteen in.") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer4 === "Zombie") {
      this.user.sleeptype = sleepyHeadTitle;
      this.user.sleeptype_text = sleepyHeadText;
      this.user.sleeptype_image = sleepyHeadRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer4 === 'Fris als "n vis') {
      this.user.sleeptype = morningPersonTitle;
      this.user.sleeptype_text = morningPersonText;
      this.user.sleeptype_image = morningPersonRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer4 === "Groggy maar dat gaat snel over") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer5 === "Blijf ik de hele dag door geeuwen.") {
      this.user.sleeptype = pandaTitle;
      this.user.sleeptype_text = pandaText;
      this.user.sleeptype_image = pandaRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer5 === "Kom ik er meestal tegen de middag wel door.") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer5 === "Word ik tegen de avond goed moe.") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer6 === "#Gamingislive: tot ´s avonds laat!") {
      this.user.sleeptype = screenAddictTitle;
      this.user.sleeptype_text = screenAddictText;
      this.user.sleeptype_image = screenAddictRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer6 === "#nophone: Mijn GSM komt mijn kamer niet in!") {
      this.user.sleeptype = kingOfSleepTitle;
      this.user.sleeptype_text = kingOfSleepText;
      this.user.sleeptype_image = kingOfSleepRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    } else if (answer6 === "#Netlix: all night long") {
      this.user.sleeptype = screenAddictTitle;
      this.user.sleeptype_text = screenAddictText;
      this.user.sleeptype_image = screenAddictRoute;
      console.log(this.user.sleeptype);
      localStorage.setItem("user_sleeptype", this.user.sleeptype);
      localStorage.setItem("user_sleeptype_text", this.user.sleeptype_text);
      localStorage.setItem("user_sleeptype_image", this.user.sleeptype_image);
    }
  }
}
