import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media'
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() bodyTitre: string;
  msgs = [];

  dropdown = false;
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  //ser = this.authService.getUser();

  constructor(public menuCtrl: MenuController, 
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
       
       console.log(this.route.paramMap.subscribe( params => {
         if (params.get('titre')){
          console.log(JSON.stringify(params));
          this.bodyTitre=params.get('titre');
         }         
        }));
       
/*
      .subscribe(params => {
         console.log(JSON.stringify(params));
         if (params.title){
          this.bodyTitre = params.titre;
         }
         */
         

     }

  ngOnInit() {
    
  }

  toggleMenu (
    
    ){
      console.log("toggle menu");
      
      this.menuCtrl.toggle ();
      // for  
      const splitpane = document.querySelector('ion-split-pane');
      if (window.matchMedia (SIZE_TO_MEDIA[splitpane.when] || splitpane.when).matches){
        splitpane.classList.toggle('split-pane-visible')
      }
        
    }

    hideDropdown(event) {
      const xTouch = event.clientX;
      const yTouch = event.clientY;
  
      const rect = this.productbtn.nativeElement.getBoundingClientRect();
      const topBoundary = rect.top + 2;
      const leftBoundary = rect.left + 2;
      const rightBoundary = rect.right - 2;
  
      if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
        this.dropdown = false;
      }
    }
    
    logout() {

      this.authService.logout();
      console.log("logout");
      this.router.navigateByUrl('/login')
    }
}
