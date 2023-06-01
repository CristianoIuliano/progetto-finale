import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmApiService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://api.themoviedb.org/3";
  apikey = "8c3cbc10a2cf805d98ee7565157f0ca0";

  //carouselApi
  carouselApiData():Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
  }


  //mostPopularApi
  mostPopularApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`)
  }


  //searchMovie
  searchMovie(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  //filmDetails

  filmDetailsApi(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
  }

  //filmVideo
  filmVideoApi(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //filmCast
  filmCastApi(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //GENRES

  //action
  filmActionApi():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie/?api_key=${this.apikey}&with_genres=28`)
  }

  //adventure
  filmAdventureApi():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie/?api_key=${this.apikey}&with_genres=12`)
  }

  //animation
  filmAnimationApi():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie/?api_key=${this.apikey}&with_genres=16`)
  }

  //comedy
  filmComedyApi():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie/?api_key=${this.apikey}&with_genres=35`)
  }
  
  //documentary
  filmDocumentaryApi():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie/?api_key=${this.apikey}&with_genres=99`)
  }
}
