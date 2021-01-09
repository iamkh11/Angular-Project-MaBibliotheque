import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { ActivatedRoute,Router } from '@angular/router';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {

  currentLivre = new Livre();


  constructor(private activatedRoute: ActivatedRoute,
                         private router :Router, 
               private livreService: LivreService) {

   }
    ngOnInit() { 
      //console.log(this.activatedRoute.snapshot.params.id);
       /*this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params.id); 
       console.log(this.currentLivre); */

       this.livreService.consulterLivre(this.activatedRoute.snapshot.params.id). subscribe( l =>{ this.currentLivre = l; } ) ;
      }
    
  
     /* updateLivre() { 
        // console.log(this.currentLivre); 
        this.livreService.updateLivre(this.currentLivre);
        this.router.navigate(['livres']);
      
      }*/

      updateLivre() { 
        this.livreService.updateLivre(this.currentLivre).subscribe(prod => { 
          this.router.navigate(['livres']); 
            },(error) => { 
            alert("Problème lors de la modification !");
           } ); 
          }
      



    
}
