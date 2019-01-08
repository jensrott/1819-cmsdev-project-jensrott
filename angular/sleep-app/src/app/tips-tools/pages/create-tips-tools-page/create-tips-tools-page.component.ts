import { Component, OnInit } from '@angular/core';
import { TipsToolsService } from '../../../core/services/tips-tools.service';
import { Router } from '@angular/router';
import { Tiptool } from '../../../core/models/Tiptool';
@Component({
  selector: 'app-create-tips-tools-page',
  templateUrl: './create-tips-tools-page.component.html',
  styleUrls: ['./create-tips-tools-page.component.scss']
})
export class CreateTipsToolsPageComponent implements OnInit {
  tip_tool: Tiptool = { id: '', title: '', content: '' };
  constructor(private tipstoolsService: TipsToolsService, private router: Router) { }

  ngOnInit() {
  }

  createTipsTools(title, content) {
    this.tipstoolsService.addTipsTool(title, content).subscribe(
      data => {
        this.tip_tool = data;
        this.router.navigate(['/tips-tools']);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

}
