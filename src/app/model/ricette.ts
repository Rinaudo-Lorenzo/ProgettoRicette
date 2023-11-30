import { Ingrediente } from "./ingrediente";

export class Ricette{
    public id: string;
    public nome: string;
    public descrizione: string;
    public ingredienti: Ingrediente [];
    public preparazione: string[];
    public tempoTotale: string;
    public difficolta: string;
    public URLimmagine: string;

   constructor(id:string, nome:string, descrizione: string, ingredienti:Ingrediente[], preparazione:string[], tempoTotale:string, difficolta: string, URLimmagine:string){
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.ingredienti = ingredienti;
        this.preparazione = preparazione;
        this.tempoTotale = tempoTotale;
        this.difficolta = difficolta;
        this.URLimmagine = URLimmagine;
    }
   
}