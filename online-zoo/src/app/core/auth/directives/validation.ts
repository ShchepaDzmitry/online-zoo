import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appValidation]',
  standalone: true,
})
export class Validation {
  condition = input.required<boolean>({ alias: 'appValidation' });

  private element = inject(ElementRef);

  constructor() {
    effect(() => {
      this.element.nativeElement.style.borderColor = this.condition() ? 'red' : 'black';
    });
  }
}
