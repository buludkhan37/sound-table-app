import { Component } from '@angular/core';
import {Sound} from '../../models/sound.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-sound-table',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    CdkDrag,
    MatTooltip
  ],
  templateUrl: './sound-table.component.html',
  styleUrl: './sound-table.component.scss'
})
export class SoundTableComponent {
  displayedColumns: string[] = ['id', 'name', 'fileName']; // определяем порядок и названия колонок
  selectedSound: Sound | null = null;

  // массив звуков
  sounds: Sound[] = [
    {
      id: 1,
      name: 'Джаз',
      fileName: 'jazz.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 2,
      name: 'Электро',
      fileName: 'electro.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 3,
      name: 'Пианино',
      fileName: 'piano.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    }
  ];

  // вызов по клину, и сохранение звука в selectedSound
  selectSound(sound: Sound) {
    this.selectedSound = sound;
    console.log(sound);
  }
}
