export class Ingrediente{
    public nome: string;
    public quantita: string;
    public unita: string;

    constructor(nome:string, quantita:string, unita:string){
        this.nome = nome;
        this.quantita = quantita;
        this.unita = unita;
    }
}