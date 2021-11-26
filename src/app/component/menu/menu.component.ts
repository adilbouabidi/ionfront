import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dataUrl = 'assets/data/menu-data.json';
  appPages : any;
  @Input() contentId;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadMenu ()
  }


  loadMenu (){
    this.http.get(this.dataUrl).subscribe (
      (resp) => {
        console.log(resp);
        this.appPages = resp;
    })
    ;
  }

 
  openDetailsWithState (url, params) {
    let navigationExtras: NavigationExtras = {
      state: {
        params: params
      }
    };

    console.log("url", url);
    console.log("params", params);
    
    this.router.navigateByUrl(url, navigationExtras);
  }
 
}
