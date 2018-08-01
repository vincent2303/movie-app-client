import { Rating } from "./rating";

export class User{
    _id: String
    name: String
    email: String
    ratings: Array<Array<number>>
    urlImage: String
}