import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'

})
export class LivresComponent implements OnInit {


  livres : Livre[];

  constructor(private livreService: LivreService ,
                           private router :Router) { 
    //this.livres = livreService.listeLivres();
   }

    
  ngOnInit(): void {

    this.livreService.listeLivre().subscribe(l => { 
      console.log(l); 
      this.livres = l;
    
    });

  }


  /*supprimerLivre(l: Livre) { 
   // console.log(l); 
  
   let conf = confirm("Are You Sure ?");
   if (conf)
    this.livreService.supprimerLivre(l);
   
  }*/



  supprimerLivre(l: Livre){
    let conf = confirm("Are You Sure ?");
     if (conf) 
     this.livreService.supprimerLivre(l.idLivre).subscribe(() => 
     { console.log("Livre supprimé"); 
     this.SuprimertLivreDuTableau(l); 
    }); }


    SuprimertLivreDuTableau(l: Livre) { 
      this.livres.forEach((cur, index) => { 
        if(l.idLivre=== cur.idLivre) { 
          this.livres.splice(index, 1);
        } 
        }); 
        }


        
}
   






