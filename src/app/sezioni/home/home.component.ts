import { Component, OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/services/film-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  

  constructor(private service: FilmApiService) {}
  
  carouselResult: any = [];
  mostPopularResult: any = [];
  filmActionResult: any = [];
  filmAdventureResult: any = [];
  filmAnimationResult: any = [];
  filmComedyResult: any = [];
  filmDocumentaryResult: any = [];
  
  ngOnInit(): void {
    this.carouselData();
    this.mostPopularData();
    this.filmAction();
    this.filmAdventure;
    this.filmAnimation;
    this.filmComedy;
    this.filmDocumentary;
  }

  carouselData(){
    this.service.carouselApiData().subscribe((result)=>{
      console.log(result);
      this.carouselResult = result.results;
    })
  }

  mostPopularData(){
    this.service.mostPopularApiData().subscribe((result)=>{
      console.log(result, 'mostPopular#');
      this.mostPopularResult = result.results;
    })
  }


  //GENRES

  filmAction(){
    this.service.filmActionApi().subscribe((result)=>{
      this.filmActionResult = result.results;
    });
  }

  filmAdventure(){
    this.service.filmAdventureApi().subscribe((result)=>{
      this.filmAdventureResult = result.results;
    });
  }

  filmAnimation(){
    this.service.filmAnimationApi().subscribe((result)=>{
      this.filmAnimationResult = result.results;
    });
  }

  filmComedy(){
    this.service.filmComedyApi().subscribe((result)=>{
      this.filmComedyResult = result.results;
    });
  }

  filmDocumentary(){
    this.service.filmDocumentaryApi().subscribe((result)=>{
      this.filmDocumentaryResult = result.results;
    });
  }

}
