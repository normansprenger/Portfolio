import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  wannaLearnVisible: boolean = false;

  showWannaLearn() {
    this.wannaLearnVisible = true;
  }

  hideWannaLearn() {
    this.wannaLearnVisible = false;
  }
}
