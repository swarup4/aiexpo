import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }
  
  fileUpload(file: any) {
    return this.http.post(environment.host + '/product/upload', file);
  }

  getData(){
    let url = environment.host + '/user';
    return this.http.get(url);
  }
}
