import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }


  // link ApiService
  apiURL(){
    return 'https://kasirapp-api.herokuapp.com';
  }

  getMakanan(){
    return this.http.get(this.apiURL()+'/get_all_makanan');
  }

  deleteMakanan(id){
    return this.http.get(this.apiURL()+'/hapus_makanan?id='+id);
  }

  ambilMakanan(id){
    return this.http.get(this.apiURL()+'/get_makanan?id='+id);
  }

}
