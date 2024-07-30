import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  public heroes = ['Spiderman', 'Superman'];
}
