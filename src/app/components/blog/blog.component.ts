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

  listadoNoticias: INoticias[] = [
  
    { titulo: "El Racing inicia la temporada 2025/26 ante el Club Deportivo Castellón en Los Campos de Sport",
      foto : "https://placehold.co/500x300",
      cuerpo: "El Racing iniciará la temporada 2025/26 ante el Club Deportivo Castellón en los Campos de Sport el fin de semana del 17-18 de agosto. La escuadra dirigida por José Alberto, se enfrentará así al cuadro castellonense, equipo contra el que la campaña anterior igualaron a uno en El Sardinero gracias a un tanto de Jon Karrikaburu. Ya en la segunda jornada, los cántabros visitarán el Carlos Belmonte para medirse al Albacete Balompié, en Castilla-La Mancha el Racing también buscará resarcirse del empate logrado en su último encuentro allí, un envite que finalizó con empate a dos, con goles de Iñigo Vicente y Juan Carlos Arana.",
      fecha: "02/07/2025"
    },
     {titulo: "Sangalli será racinguista una temporada más.",
      foto : "https://placehold.co/500x300",
      cuerpo: "Marco Sangalli, que la pasada campaña disputó 38 partidos, anotó cuatro goles y repartió tres asistencias con la verdiblanca, ha firmado un nuevo contrato que le ligará al Real Racing Club hasta el 30 de junio de 2026. Marco Sangalli Fuentes, nacido en San Sebastián (Guipúzcoa) el 7 de febrero de 1992, llegó al club cántabro en enero de 2023 y ha disputado a lo largo de estas tres temporadas 90 partidos, sumando actuaciones memorables y ganándose el cariño de la afición a lo largo de 3.841 minutos, en los que ha logrado acumular seis goles y seis asistencias. Así, con este nuevo contrato, Sangalli afronta su cuarta temporada en los Campos de Sport, una nueva campaña en la que el donostiarra podrá seguir sumando experiencia, con 377 partidos disputados en la categoría de plata, a un proyecto que año tras año no para de evolucionar.",
      fecha: "04/07/2025"
    }
  ];

  publicarNoticia() {
    if ( this.noticias.titulo && this.noticias.foto && this.noticias.cuerpo && this.noticias.fecha !== '' ) {
      this.listadoNoticias.push(this.noticias);
      this.noticias = { titulo: '', foto: '', cuerpo: '', fecha: '' };
    } else
      return alert('Todos los campos son obligatorios');
    
  }

  pintarNoticias() {
    let html = ``;

    this.listadoNoticias.forEach((noticias) => {
      html += `<h1>${noticias.titulo}</h1><img src="${noticias.foto}"</img><p>${noticias.cuerpo}</p><h3>${noticias.fecha}</h3>`;
    });
    return html;
  }
}
