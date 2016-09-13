import {Component} from "@angular/core";
import {Page} from "ui/page";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable"; 
import "rxjs/add/operator/map"
import {BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions, Headers, RequestOptions} from '@angular/http';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private page:Page, private http:Http){
        // console.log( this.getInfo());
    }

    public getRequest(){
        console.log("geInfo method");
          this.http.get("https://httpbin.org/get?show_env=1")
                    .map(result=>{return result.json();})
                    .subscribe(response => {
                        console.log("RESPONSE: " + JSON.stringify(response));
                        alert(JSON.stringify(response.args));
                    }, error => console.log(error));
    }
    public postRequest(){
        console.log("post http client");
        let requestBody=JSON.stringify({
            name:"Sample name",
            title: "Title 1",
            number:11
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post("https://httpbin.org/post", requestBody, options)
                    .map(result=>{ return result.json();})
                    .subscribe(response => {
                        console.log("RESPONSE: " + JSON.stringify(response));
                        alert(JSON.stringify(response.data));
                    }, error => console.log(error));
    }

}
