import {
  Component,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  IonSegment
} from '@ionic/angular';
import {
  NoticiasService
} from 'src/app/services/noticias.service';
import {
  Article
} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {
    static: true
  }) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];



  constructor(private noticiaService: NoticiasService) {

  }

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.loadNotices(this.segment.value);
  }

  changeCategory(event) {
    this.noticias = [];
    this.loadNotices(event.detail.value);
  }

  loadNotices(category: string, event ? ) {
    this.noticiaService.getTopHeadLineCategory(category).subscribe(resp => {
      this.noticias.push(...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
  }

  loadData($event) {
    this.loadNotices(this.segment.value, event);
  }

}