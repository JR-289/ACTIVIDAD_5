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
      foto : "https://statics-maker.llt-services.com/rac/images/2025/07/01/xlarge-wp/40026b6a-2d79-43c0-be17-cbc4d2a67c91-574.webp",
      cuerpo: "El Racing iniciará la temporada 2025/26 ante el Club Deportivo Castellón en los Campos de Sport el fin de semana del 17-18 de agosto. La escuadra dirigida por José Alberto, se enfrentará así al cuadro castellonense, equipo contra el que la campaña anterior igualaron a uno en El Sardinero gracias a un tanto de Jon Karrikaburu. Ya en la segunda jornada, los cántabros visitarán el Carlos Belmonte para medirse al Albacete Balompié, en Castilla-La Mancha el Racing también buscará resarcirse del empate logrado en su último encuentro allí, un envite que finalizó con empate a dos, con goles de Iñigo Vicente y Juan Carlos Arana.",
      fecha: "2025-07-04"
    },
     {titulo: "El Racing renueva a Aritz Aldasoro hasta el 30 de junio de 2029",
      foto : "https://statics-maker.llt-services.com/rac/images/2025/06/25/xlarge-wp/29e7b224-0799-49b0-9042-9ceadb8bf444-200.webp",
      cuerpo: "El Real Racing Club ha renovado a Aritz Aldasoro hasta el 30 de junio 2029. El centrocampista, que se incorporó al equipo cántabro hace tres años, ha diputado 117 partidos oficiales con la camiseta verdiblanca -115 de Segunda División y dos de Copa del Rey- en los que ha anotado cuatro goles. “Es un orgullo seguir aquí, estoy muy agradecido por la oportunidad y, sobre todo, porque desde que llegué he visto como el club y yo hemos crecido de la mano”, aseguró el futbolista tras rubricar su nuevo contrato con la entidad cántabra. Aritz Aldasoro Sarriegi nació en Beasain (Guipúzcoa) el 5 de junio de 1999 y se formó en las categorías inferiores de la Real Sociedad. En 2017 se estrenó con el tercer equipo blanquiazul en Tercera División y en la campaña 2019/20 promocionó al filial donostiarra. Aldasoro, que mide 1,76 y pesa 72 kilos, consiguió con la Real Sociedad B el ascenso a LaLiga Hypermotion en mayo de 2021 (eliminaron en el último partido de la promoción al Algeciras CF) y su debut en la categoría de plata -portando además el brazalete de capitán- fue en agosto de ese año ante el Club Deportivo Leganés en el Reale Arena",
      fecha: "2025-07-02"
    }
  ];

  publicarNoticia() {
    if ( this.noticias.titulo && this.noticias.foto && this.noticias.cuerpo && this.noticias.fecha !== '' ) {
      this.listadoNoticias.unshift(this.noticias);
      this.noticias = { titulo: '', foto: '', cuerpo: '', fecha: '' };
    } else
      return alert('Todos los campos son obligatorios');
    
  }

  pintarNoticias() {
    let html = ``;

    

    this.listadoNoticias.forEach((noticias) => {
      html += `<h1>${noticias.titulo}</h1><img src="${noticias.foto}" alt=""</img><p>${noticias.cuerpo}</p><h4>Fecha de publicación: ${noticias.fecha}</h3><hr>`;
    }
    
  );
    return html;
  }
}
