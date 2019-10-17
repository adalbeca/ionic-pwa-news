import {
  RespuestaTopHeadLines
} from './../interfaces/interfaces';
import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  environment
} from 'src/environments/environment';

const keyNews = environment.keyNews;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': keyNews
});

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  headLinePage = 0;
  categoryActual = '';
  cateogryPage = 0;


  constructor(private http: HttpClient) {}

  private Query < T > (query: string) {
    query = `${apiUrl}${query}`;
    return this.http.get < T > (query, {
      headers
    });
  }

  getTopHeadLines() {
    this.headLinePage++;
    return this.Query < RespuestaTopHeadLines > (`/top-headlines?country=ve&page=${this.headLinePage}`);
  }

  getTopHeadLineCategory(category: string) {
    if (this.categoryActual === category) {
      this.cateogryPage++;
    } else {
      this.cateogryPage = 1;
      this.categoryActual = category;
    }

    return this.Query < RespuestaTopHeadLines > (`/top-headlines?country=ve&category=${category}&page=${this.cateogryPage}`);
  }
}