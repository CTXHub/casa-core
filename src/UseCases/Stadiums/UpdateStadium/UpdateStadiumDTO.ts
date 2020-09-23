import { Location } from '../../../entities/Location'

export interface IUpdateStadiumRequestDTO{
    id:string;
    name: string;
    description: string;
    location: Location;
}
