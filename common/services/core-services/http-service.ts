import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(protected http: HttpClient) {}

    setHeaders(): any {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Access-Control-Allow-Origin': '*'
            })
        };
        return httpOptions;
    }

    async get(url): Promise<any> {
        const httpOptions = this.setHeaders();
        return this.http.get<any>(url, this.setHeaders()).toPromise();
    }

    async postData(url: string, formData: any): Promise<any> {
        return this.http.post<any>(url, formData, this.setHeaders()).toPromise();
    }
}