import { RespuestaTopHeadLines } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=ve&apiKey=bf71226d8c3a41a68dc45a970fa046dd`);
  }
}
