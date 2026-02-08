import { Component } from '@angular/core';
import confetti from 'canvas-confetti'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  moveButton(event: MouseEvent): void {
    const btn = event.target as HTMLElement;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth); 
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`; 
    this.scaleButton();

    console.log('Button moved!');
  }

  launchConfetti(): void { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); }

  scaleButton(): void {
    const btn = document.querySelector('.yes-btn') as HTMLElement;
    const currentScale = parseFloat(btn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    btn.style.transform = `scale(${currentScale + 0.5})`;
  }
}