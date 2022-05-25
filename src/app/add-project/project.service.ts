import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  fileUpload(file: any) {
    return this.http.post(environment.host + '/product/upload', file);
  }

  getProject(type: string){
    return this.http.get(environment.host + '/project/' + type);
  }

  addProject(data: any){
    return this.http.post(environment.host + '/project/addProject', data);
  }
}
