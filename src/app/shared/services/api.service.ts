import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private _commonService: CommonService) { }

  async postService (api:string, data:any) {
    const request = await this.http.post(environment.apiUrl+api, data).toPromise()
    return request
  }

  async getAllService (api:string, page:number = 1, limit:number = 1000) {
    const request = await this.http.get(environment.apiUrl+api, {headers: this._commonService.generatePageChangeHeader(page, limit)}).toPromise()
    return request
  }
}
