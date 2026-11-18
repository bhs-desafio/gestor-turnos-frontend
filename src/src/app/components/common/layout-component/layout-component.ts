import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-layout-component',
  styleUrl: './layout-component.css',
  templateUrl: './layout-component.html',
})
export class LayoutComponent {}
