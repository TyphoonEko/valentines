import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {

}
