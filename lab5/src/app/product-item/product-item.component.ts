import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
//для каж прод добавны свтва li хранящее кол лайков и liked показывающее 
// поставил ли пользователь лайк.
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any; 
  @Output() delete = new EventEmitter<number>(); 
  //Кн вып дво фу: если лайк есть удаляет его  если нет ставит лайк count++ 
  // а статус лайка меняется через this.product.liked = !this.product.liked.
  mainImageUrl: string = '';
  showShareDropdown = false;
  ngOnInit(): void {
    if (this.product?.images?.length > 0) {
      this.mainImageUrl = this.product.images[0];
    }

    if (this.product.likes === undefined) this.product.likes = 0;
    if (this.product.liked === undefined) this.product.liked = false;
  }
  setMainImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }
  toggleLike() {
    if (this.product.liked) {
      this.product.likes--;
    } else {
      this.product.likes++;
    }
    this.product.liked = !this.product.liked;
  }

  share(platform: string) {
    const text = `Посмотрите этот товар: ${this.product.name}`;
    const url = encodeURIComponent(this.product.kaspiLink);
    const msg = encodeURIComponent(`${text} - ${this.product.kaspiLink}`);

    const links: { [key: string]: string } = {
      whatsapp: `https://wa.me/?text=${msg}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`
    };

    if (links[platform]) window.open(links[platform], '_blank');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.product.kaspiLink)
      .then(() => alert('Ссылка скопирована!'))
      .catch(() => alert('Ошибка при копировании'));
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  toggleShareDropdown() {
    this.showShareDropdown = !this.showShareDropdown;
  }
}