import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get(path: String) {
        return this.http.get('http://localhost:8080' + path);
    }

}
