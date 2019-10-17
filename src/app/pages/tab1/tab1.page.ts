import { Article } from './../../interfaces/interfaces';
import { NoticiasService } from './../../services/noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[] = [];

  constructor(private noticiaServices: NoticiasService) {}

  ngOnInit() {
    this.noticiaServices.getTopHeadLines()
      .subscribe(noticia => { 
        this.noticias.push(...noticia.articles);
      })
  }

}
