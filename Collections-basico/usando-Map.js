function getAdmins(map){
    let admins = [];
    //usando entry
    for([key,value] of map){
        if(value==='Admin'){
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Joao', 'Admin');
usuarios.set('Kate', 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('Naty', 'Admin');


console.log(getAdmins(usuarios));
