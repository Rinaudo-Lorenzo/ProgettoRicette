export class Ricette{
    public id: string;
    public nome: string;
    public descrizione: string;
    public ingredienti: string[];
    public preparazione: string[];
    public tempoTotale: number;
    public difficolta: string;
    public URLimmagine: string;

   constructor(id:string, nome:string, descrizione: string, ingredienti:string[], preparazione:string[], tempoTotale:number, difficolta: string, URLimmagine:string){
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