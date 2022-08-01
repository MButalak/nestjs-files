import { IsNotEmpty } from "class-validator";

export class createTaskDto {
  title: string;

  @IsNotEmpty()
  description: string;
}
