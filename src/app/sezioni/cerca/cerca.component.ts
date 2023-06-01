import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FilmApiService } from 'src/app/services/film-api.service';


@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {
  
  constructor(private service:FilmApiService){}
  
  ngOnInit(): void {}

  searchResult:any;

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    console.log(this.searchForm.value)
    
    this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result, 'searchMovie#');
      this.searchResult= result.results;
    })
  }
}
