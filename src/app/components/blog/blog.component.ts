import { Component } from '@angular/core';
import { INoticias } from '../../interfaces/i-noticias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  noticias: INoticias = {
    titulo: '',
    foto: '',
    cuerpo: '',
    fecha: '',
  };

  listadoNoticias: INoticias[] = [];

  publicarNoticia() {
    if ( this.noticias.titulo !== '' ) {
      this.listadoNoticias.push(this.noticias);
      this.noticias = { titulo: '', foto: '', cuerpo: '', fecha: '' };
    } else if (
      this.noticias.titulo  === '' && this.noticias.cuerpo === ''
    ) {
      return alert('Todos los campos son obligatorios');
    }
  }

  pintarNoticias() {
    let html = ``;

    this.listadoNoticias.forEach((noticias) => {
      html += `<li>${noticias.titulo} - ${noticias.cuerpo}</li>`;
    });
    return html;
  }
}
