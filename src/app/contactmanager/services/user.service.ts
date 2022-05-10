import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;
  private dataStore:{
    users: User[];
  } 

  constructor(private httpClient: HttpClient) { 
    this.dataStore = {users:[]}
    this._users = new BehaviorSubject<User[]>([]);
  }

  get Users():Observable<User[]>{
    return this._users.asObservable();
  }

  loadAll(){
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.httpClient.get<User[]>(userUrl)
    .subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({},this.dataStore).users);
    }, error => {
      console.log(error);
    })
  }
  // getUserById(id:number):Observable<User>{

  // }
  getUserById(id:number){
    return this.dataStore.users.find(x=>x.id == id);
  }
  saveUser(user:User):Promise<User>{
    return new Promise((resolver,reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({},this.dataStore).users);
      resolver(user);
    })
  }
}
