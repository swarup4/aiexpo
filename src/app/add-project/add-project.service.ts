import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  constructor(private http: HttpClient) { }

  fileUpload(file: any) {
    console.log('image uploading');
    return this.http.post('http://localhost:3000/product/upload', file);
  }

  getData(){
    let url = environment.host + '/user';
    return this.http.get(url);
  }
}
