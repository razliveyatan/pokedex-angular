export interface PokemonApiListInterface {
    count:number;
    next:string|null;
    previous:string|null;   
    results:PokemonApiResultsInterface[];
}

export interface PokemonApiResultsInterface{
    name:string;
    url:string;
}

export interface PokemonItemInterface{
    name:string;
    weight:number;
    height:number;
    abilities:PokemonAbilityInterface[];
    id:number;
    imgUrl:string;
    stats:PokemonStatsInterface[];
}

export interface PokemonAbilityInterface{
    ability:PokemonAbilityInnerInterface
}

export interface PokemonAbilityInnerInterface{
    name:string;
    url:string;
}

export interface PokemonStatsInterface{
    base_stat:number;
    effort:number;    
    stat:StatInterface
}

interface StatInterface {
    name:string;
    url:string;
}







