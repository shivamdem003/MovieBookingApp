export class User {
    id: number|any;
    username:string=''
    password:string=''
    userRole: string=''
    email: string=''
    firstName:string=''
    lastName:string=''
    contactNumber:number=0
    //securityQuestion:Map<string,string>|any;
    //securityQuestion = new Map<string,string>();
    securityQuestion: { [key: string]: string } = {};
}
