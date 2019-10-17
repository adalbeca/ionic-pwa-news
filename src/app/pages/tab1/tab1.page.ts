import {
  Article
} from './../../interfaces/interfaces';
import {
  NoticiasService
} from './../../services/noticias.service';
import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiaServices: NoticiasService) {}

  ngOnInit() {
    this.loadNoticies();
  }

  loadData(event) {
    console.log('termina');
    this.loadNoticies(event);
  }

  loadNoticies(event ? ) {
    this.noticiaServices.getTopHeadLines()
      .subscribe(noticia => {
        if (noticia.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
        }
        this.noticias.push(...noticia.articles);
        if (event) {
          event.target.complete();
        }
      });
  }

}