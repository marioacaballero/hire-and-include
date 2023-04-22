import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { EDUCATIONDEGREE, EDUCATIONSTATE } from 'src/constants/enums/education';

export class EducationDTO {
  @IsNotEmpty()
  @IsEnum(EDUCATIONDEGREE)
  name: EDUCATIONDEGREE;

  @IsNotEmpty()
  @IsEnum(EDUCATIONSTATE)
  state: EDUCATIONSTATE;
}

export class EducationUpdateDTO {
  @IsOptional()
  @IsEnum(EDUCATIONDEGREE)
  name: EDUCATIONDEGREE;

  @IsOptional()
  @IsEnum(EDUCATIONSTATE)
  state: EDUCATIONSTATE;
}
