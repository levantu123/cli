import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient} from  '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-dictionary",
  templateUrl: "./dictionary.component.pug",
  styleUrls: ["./dictionary.component.scss"]
})

@Injectable()
export class DictionaryComponent implements OnInit {
  constructor(private  httpClient:  HttpClient, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.currentWord = this.route.snapshot.paramMap.get("currentWord");
    this.searchKey = this.route.snapshot.paramMap.get("searchKey");
    if(this.currentWord == null){
      this.currentWord = "";
    }
    if(this.searchKey == null){
      this.searchKey = "";
    }
    //this.httpClient.get(`/words/search/findByBaseTextIgnoreCaseStartsWith?baseText=${this.searchKey}&projection=wordMeta`).subscribe((res:any) => this.searchData = res._embedded.words);
    this.searchData = [];
    this.httpClient.get(`/words/${this.currentWord}`).subscribe((res:any) => this.currentData = res);

  }
  searchData: Object = [];
  currentWord = "";
  currentData: Object = {};
  searchKey = "" ;
  updateListSearch(event: any){
    this.httpClient.get(`/words/search/findByBaseTextIgnoreCaseStartsWith?baseText=${event.target.value}&projection=wordMeta`).subscribe((res:any) => this.searchData = res._embedded.words);
  }
}
