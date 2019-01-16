export class Usuario {

    constructor(id_usuario:Number = 0, username: String = "",password:String = "",fullname: String = ""){
        this.id_usuario=id_usuario;
        this.username=username;
        this.fullname=fullname;
        this.password=password;
    }

    id_usuario: Number;
	username: String;
    password: String;
    fullname: String;
    
    
}
