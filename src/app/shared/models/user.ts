import { UserRole } from './user-role';
import { Gender } from './gender';
import { Title } from './title';
import { Order } from './order';

export class User {
    UserID : number;
    UserEmail : string;
    UserPassword : string;
    GUID : string;
    GUIDExpiry : Date;
    Name : string;
    Surname : string;
    DOB : Date;
    TitleID : number;
    GenderID : number;
    TypeID : number;
    Type: UserRole;
    Gender: Gender;
    Title: Title;
    Orders: Order;
    
}
