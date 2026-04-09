import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading: boolean = true;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Failed to fetch data!');
      }
    });
  }

  deleteAlbum(id: number): void {
    const confirmDelete = confirm('ты точно хочешь удалить?');

    if (confirmDelete) {
      this.albumsService.deleteAlbum(id).subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== id);
        alert('aльбом успешно удалена!');
      }, error => {
        alert('не получилось!');
      });
    }
  }
}