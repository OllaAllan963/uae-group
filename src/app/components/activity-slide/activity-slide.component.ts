import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-slide',
  standalone: true,
  imports: [NgIf],
  templateUrl: './activity-slide.component.html',
  styleUrl: './activity-slide.component.css'
})
export class ActivitySlideComponent {
  @Input() name!: string;
  @Input() image!: string;
}
