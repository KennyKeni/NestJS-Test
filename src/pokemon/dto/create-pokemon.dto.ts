import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreatePokemonStatDto } from "./create-pokemonStat.dto";
import { EntitySource } from "src/common/enums/entityMetadata";

export class CreatePokemonDto {

  @IsNotEmpty()
  @IsNumber()
  readonly national_dex!: number;
  
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @IsOptional()
  @IsString()
  readonly image_url?: string;

  @IsOptional()
  @IsString()
  readonly shiny_url?: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly generation!: number;
  
  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsBoolean()
  readonly implemented?: boolean;

  @ValidateNested()
  @Type(() => CreatePokemonStatDto)
  readonly stats!: CreatePokemonStatDto;

  @IsOptional()
  @IsEnum(EntitySource)
  readonly source?: EntitySource;
}