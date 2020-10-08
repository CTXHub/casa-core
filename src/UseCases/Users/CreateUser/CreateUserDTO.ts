import { UserRole } from "src/entities/User";
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions";

export interface ICreateUserRequestDTO {
    username: string;
    email: string;
    password: string;
    role: UserRole;
  }
