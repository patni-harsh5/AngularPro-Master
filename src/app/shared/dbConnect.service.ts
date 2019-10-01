import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DBConnect{
    addrecipeToDB(recipe:any){
        // console.log("recipe is added to DB!");

        this.http.post('https://harsh-tcs.firebaseio.com/recipe.json',recipe).subscribe(mydata=>{
            console.log(mydata);
        })

    }

    loadRecipefromDB(){
        // console.log("In DB Service");
        return this.http
        .get(
          'https://harsh-tcs.firebaseio.com/recipe.json'
        )
        .pipe(
          map(responseData => {
            const postsArray: any[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          })
        );
    }

    constructor(private http:HttpClient) {}
}