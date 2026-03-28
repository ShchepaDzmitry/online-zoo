import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  buttonText = input('');
  additionalClass = input<string>('');
  type = input('');

  baseClass = 'button';
  faArrowRight = faArrowRight;

  finalClass = computed(() => {
    return `${this.baseClass} ${this.additionalClass()}`;
  });
}
