import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    { text: 'Our project benefited enormously from Normans efficient way of working.', author: 'V. Latza - Team Partner' },
    { text: 'I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. Hes super knowledgeable, easy to work with, and Id happily work with him again given the chance.', author: 'S. Matter - Team Partner' },
    { text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.', author: 'D. Thomas - Team Partner' }
  ];

  points = new Array(this.references.length);
  currentIndex = 0;

  showReference(index: number) {
    this.currentIndex = index;
    this.updateSlidePosition();
  }

  prevReference() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.references.length - 1;
    this.updateSlidePosition();
  }

  nextReference() {
    this.currentIndex = (this.currentIndex < this.references.length - 1) ? this.currentIndex + 1 : 0;
    this.updateSlidePosition();
  }

  goToReference(index: number) {
    this.currentIndex = index;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
