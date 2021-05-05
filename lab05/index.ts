import {AdminAccess, forAdmin} from './Access/admin';
import {ModeratorAccess, forModerator} from './Access/moderator';
import Role from './role';
import checkAcces from './Access/access';

function StandardAccess(constructorFn: Function):void{
    constructorFn.prototype.role = Role.Standard;
}


function watch(target:object, propKey:string, descriptor:PropertyDescriptor){
    const originalFn = descriptor.value;
    descriptor.value = function(param){
        const args = [];
        args.push(param);
        console.log(`User: ${param} access to ${propKey}`);
        return originalFn.apply(this, args);
    }

}





class User{
    name:string;
    surname:string;
    role:Role;

    toString():string{
        return `${this.name} ${this.surname} ${this.role}`;
    }
}
@StandardAccess
class StandardUser extends User{
    constructor(name:string, surname:string){
        super();
        this.name = name;
        this.surname = surname;

    }
}
@ModeratorAccess
class ModeratorUser extends User{
    constructor(name:string, surname:string){
        super();
        this.name = name;
        this.surname = surname;

    }
}
@AdminAccess
class AdminUser extends User{
    constructor(name:string, surname:string){
        super();
        this.name = name;
        this.surname = surname;

    }
}

class Resource{
    private resourceValue: string;
    constructor(){
        this.resourceValue = 'secret value';
    }
    @watch
    @forAdmin
    @forModerator
    @checkAcces
    public read(user:User):void{
        console.log('I see value ' + this.resourceValue);
    }

    @watch
    @forAdmin
    @checkAcces
    public modify(user:User):void{
        if(user.role === Role.Admin){
            this.resourceValue = 'modified secret value';
            console.log('I see modified value ' + this.resourceValue);
        }
    }
}

const user1 = new StandardUser('John', 'Walker');
const user2 = new ModeratorUser('Alan', 'Parker');
const user3 = new AdminUser('Adam', 'Smith');

// console.log(user1.toString());
// console.log(user2.toString());
// console.log(user3.toString());
//console.log('aaaa');
const resource = new Resource();

resource.read(user1);
resource.modify(user1);

resource.read(user2);
resource.modify(user2);

resource.read(user3);
resource.modify(user3);