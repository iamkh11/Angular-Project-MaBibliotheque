import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

const httpOptions = { 
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'} ) };


@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres : Livre[]; //un tableau de Produit

  apiURL: string = 'http://localhost:8888/livres/api';
  // livre : Livre;

  constructor(private http : HttpClient) { 
    

    /*this.livres = [ 
      {idLivre  : 1, nomLivre  : "Les Trois Mousquetaires", prixLivre  : 50.5, dateCreation : new Date("01/14/2011")},
      {idLivre  : 2, nomLivre  : "La bicyclette bleue, toma 1 ", prixLivre  : 30.4, dateCreation : new Date("12/17/2010")},
       {idLivre  : 3, nomLivre  :"L'Etranger", prixLivre  :80.99, dateCreation : new Date("02/20/2020")},
       {idLivre  : 4, nomLivre  :"Don Quichotte", prixLivre  :99.99, dateCreation : new Date("02/20/2020")}
    ];*/
   } 
   
   /*listeLivres():Livre[] {
     return this.livres; 
    }*/

    listeLivre(): Observable<Livre[]>{
       return this.http.get<Livre[]>(this.apiURL); 
      }




     /*ajouterLivre( L: Livre){
        this.livres.push(L); 
      }*/
      
      ajouterLivre( l: Livre):Observable<Livre>{ 
        return this.http.post<Livre>(this.apiURL, l, httpOptions); 
      }





     /* supprimerLivre( l: Livre){
         //supprimer le Livre prod du tableau Livres 
         const index = this.livres.indexOf(l, 0);
          if (index > -1) { this.livres.splice(index, 1); } 
          //ou Bien 
          /* this.produits.forEach((cur, index) => { 
            if(prod.idProduit === cur.idProduit) 
          {
             this.produits.splice(index, 1); 
          }
         }); */
         

         supprimerLivre(id : number) {
            const url = `${this.apiURL}/${id}`;
             return this.http.delete(url, httpOptions);
             }








         /*consulterLivre(id:number): Livre{ 
           return this.livres.find(p => p.idLivre == id);
           // return this.livre;
           }*/

           consulterLivre(id: number): Observable<Livre> {
              const url = `${this.apiURL}/${id}`; 
              return this.http.get<Livre>(url);
             }




           trierLivres(){ 
             this.livres = this.livres.sort((n1,n2) => { 
               if (n1.idLivre  > n2.idLivre ) { return 1; } 
               if (n1.idLivre  < n2.idLivre ) { return -1; } 
               return 0; 
              }); 
            }

          /*
           updateLivre(l:Livre) { 
             // console.log(p);
            this.supprimerLivre(l);
               this.ajouterLivre(l);
               this.trierLivres();*/

               updateLivre(l :Livre) : Observable<Livre> { 
                 return this.http.put<Livre>(this.apiURL, l, httpOptions);
                 } 
              
              
 }





