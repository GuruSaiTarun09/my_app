import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  filterStudent(term: string) {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=" + term);
  }

  deleteStudent(id: string) {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/" + id);
  }

  sortStudent(Column: string, Order: string) {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=" + Column + "&order=" + Order);
  }

  paginateStudent(limit: number, page: number) {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=" + limit + "&page=" + page);
  }

  //post
  createadddeatails(adddeatails:any){
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",adddeatails);
  }
}
