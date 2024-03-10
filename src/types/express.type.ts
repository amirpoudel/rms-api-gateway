import { Request } from 'express'


interface User {
    id:string,
    restaurantId:string,
    email: string, 
    name: string,
    role: string,

}

interface JwtPayload {
    id:string,
    restaurantId:string,
    email: string, 
    name: string,
    role: string,
}

interface UserRequest extends Request {
    file: any

    user:User
}







export type { UserRequest,JwtPayload }