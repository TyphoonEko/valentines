import { Component, inject } from '@angular/core';
import confetti from 'canvas-confetti'; 
import { MatSnackBar } from '@angular/material/snack-bar';

import {
    MatDialog,
    MatDialogConfig
} from '@angular/material/dialog';
import { Detail } from './detail/detail';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  imports:[CommonModule],
  styleUrl: './card.scss',
})
export class Card {
  cancelCount = 0;
  private dialog:any = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  shownayPicture = false;
  showyayPicture = false;

  private _dialogConfig: MatDialogConfig = {
        autoFocus: false,
        width: '75%',
        height: '75%'
    };

  onConfirm():void
  {
    const dialogConfig = { ...this._dialogConfig};
    this.dialog.open(Detail,dialogConfig);
  }

  moveButton(event: MouseEvent): void {
    const btn = event.target as HTMLElement;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth); 
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`; 
    this.scaleButton();

    this.cancelCount += 1;

    if (this.cancelCount > 4)
    {
      this.shownayPicture= true;

      this.snackBar.open('EDI WAG!!', '', {
      duration: 5000, // auto close after 3 seconds
      horizontalPosition: 'right',
      verticalPosition: 'top'});
    }
  }

  launchConfetti(): void { 
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); 
    this.yehey();
    this.showyayPicture= true;
  }

  scaleButton(): void {
    const btn = document.querySelector('.yes-btn') as HTMLElement;
    const currentScale = parseFloat(btn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    btn.style.transform = `scale(${currentScale + 0.5})`;
  }

  yehey(){
    this.snackBar.open('YEYYYY! 💌', '', {
      duration: 5000, // auto close after 3 seconds
      horizontalPosition: 'right',
      verticalPosition: 'top'});
  }
}