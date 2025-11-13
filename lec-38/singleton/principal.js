class Principal{
    prncipalInstance = null;
    _constructor(name){
        this.name = name;
    }
    static getPrincipal(){
        if(!principalInstance){
        let principal = new Principal("Sonam");
        principalInstance = principal;
    }
        return principalInstance;
    }

    restigateStudent(name){

    }
    suspend(){

    }
    removeSuspension(){

    }
    notify(message){

    }
}

module.exports = Principal;