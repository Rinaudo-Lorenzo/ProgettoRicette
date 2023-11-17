export class Ricette{
    public id: number;
    public name: string;
    public descriction: string;
    public ingredients: string[];
    public steps: string[];
    public totalTime: number;
    public difficulty: string;
    public imageURL: string;

   constructor(id:number, name:string, descriction: string, ingredients:string[], steps:string[], totalTime:number, difficulty: string, imageURL:string){
        this.id = id;
        this.name = name;
        this.descriction = descriction;
        this.ingredients = ingredients;
        this.steps = steps;
        this.totalTime = totalTime;
        this.difficulty = difficulty;
        this.imageURL = imageURL;
    }
   
}