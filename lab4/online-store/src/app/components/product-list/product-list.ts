import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {

  encodeURIComponent = encodeURIComponent;

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro в цвете Cosmic Orange с 256 ГБ памяти...',
      price: 771806,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 128GB (Black) — флагман 2023 года...',
      price: 389868,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 128GB (Black) — флагман 2021 года...',
      price: 305000,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max в цвете Cosmic Orange...',
      price: 819585,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro в цвете Midnight Blue...',
      price: 739440,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Apple iPhone 16 128GB (Black)...',
      price: 449750,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      id: 7,
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Apple iPhone 13 128GB (White)...',
      price: 315284,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: 'Apple iPhone 17 Pro Silver...',
      price: 778456,
      rating: 5.0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000'
    },
    {
      id: 9,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      description: 'Apple iPhone 17 Pro Max Silver...',
      price: 848835,
      rating: 5.0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000'
    },
    {
      id: 10,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro Max Midnight Blue...',
      price: 794400,
      rating: 5.0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000'
    }
  ];

  constructor(){
    this.sortByPriceAscending();
  }

  sortByPriceAscending() {
    this.products.sort((a, b) => a.price - b.price);

  }
  sortByPriceDescending() {
    this.products.sort((a, b) => b.price - a.price);
  }

  

}