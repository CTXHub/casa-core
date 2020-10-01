import { Location } from '../../../entities/Location'

export interface ICreateStadiumRequestDTO {
    name: string;
    description: string;
    location: Location;
    stadiumImage: string;
  }
