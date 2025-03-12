export interface IUser {
    name:string,
    email:string,
    role:string,
    status:string,
}

 export interface IMember extends IUser {
     id:string,
     team_id:string,
 }