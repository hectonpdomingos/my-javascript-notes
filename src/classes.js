import {presidentsDB} from './data.js';  



    
export class presidents {

    constructor(){
        //constructor will be fired anyway
       console.log('Output from the presidents class constructor');
       
    }
    createId(){
        var id =  (Math.floor(Math.random() * 9999));
        console.log(`new id  ${id}`)
        return id;
    
    } 
    
    getPresidents(){
        console.table(presidentsDB);
    }
    setPresident(data){
        presidentsDB.push({id: data.id, name: data.name, country: data.country, age: data.age});
        this.getPresidents();        
    }
    deletePresident(country){
       console.log(`Deleting the president of ${country}` );
       let newPresidentsDB = presidentsDB.filter(function(el) { return el.country != country; });   
       console.table(newPresidentsDB);
       this.presidentsDB = newPresidentsDB;
       console.table(presidentsDB);
       this.getPresidents();
        
    }
    updatePresident(country){
       
    }
    findPresident(country){
        let president = presidentsDB.find(president => president.country === country);
        console.table(president);
    }
      
}