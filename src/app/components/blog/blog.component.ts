import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

noticias: any = {
  titulo: "",
  foto: "",
  cuerpo: "",
  fecha: ""

}

listadoNoticias: any[] = []

}
