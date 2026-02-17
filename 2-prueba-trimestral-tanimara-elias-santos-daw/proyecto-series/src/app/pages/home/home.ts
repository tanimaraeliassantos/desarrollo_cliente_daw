import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  series: any[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe((data: any) => {
      this.series = data.data ?? data;
    });
  }
}
