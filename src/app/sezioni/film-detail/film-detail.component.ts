import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from 'src/app/services/film-api.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  
  constructor(private service: FilmApiService, private router:ActivatedRoute) { }
  
  filmDetailResult:any;
  filmVideoResult:any;
  filmCastResult:any;

  ngOnInit(): void {
    
    let getFilmId = this.router.snapshot.paramMap.get('id');
    console.log(getFilmId, 'paramsFilm#');

    this.getFilm(getFilmId);
    this.getVideo(getFilmId);
    this.getCast(getFilmId);
  }

  getFilm(id:any){
    this.service.filmDetailsApi(id).subscribe((result)=>{
      console.log(result, 'filmDetails#');
      this.filmDetailResult = result;  
    })
  }
  
  getVideo(id:any){
    this.service.filmVideoApi(id).subscribe((result)=>{
      console.log(result, 'filmVideo#');
      result.results.forEach((element:any)=>{
        if(element.type=='Trailer'){
          this.filmVideoResult = element.key;
        }
      })
    });
  }

  getCast(id:any){
    this.service.filmCastApi(id).subscribe((result)=>{
      console.log(result, 'filmCast#');
      this.filmCastResult = result.cast;
    });
  }
  
  

}
