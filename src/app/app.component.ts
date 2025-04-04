import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SoundTableComponent} from './components/sound-table/sound-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SoundTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sound-table';
}
