export interface PokemonResponse {
    count: number;
    next?: string;
    previous?: string;
    results: NameUrl[];
}

export interface NameUrl {
    name: string;
    url: string;
}

export interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    forms: NameUrl[];
    game_indices: PokemonGameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    // {
    //     move: NameUrl;
    //     version_group_details: [
    //         {
    //             level_learned_at: number;
    //             move_learn_method: NameUrl;
    //             version_group: NameUrl;
    //         }
    //     ];
    // }
    name: string;
    order: number;
    species: NameUrl;
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}

export interface PokemonAbility {
    ability: NameUrl;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonGameIndex {
    game_index: number;
    version: NameUrl;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NameUrl;
}

export interface PokemonType {
    slot: number;
    type: NameUrl;
}

export interface PokemonAbilityDetail {
    effect_changes: any[];
    effect_entries: PokemonEffect[];
    flavor_text_entries: PokemonFlavorText[];
    generation: NameUrl;
    id: number;
    is_main_series: boolean;
    name: string;
    names: PokemonLanguage[];
    pokemon: PokemonAbilityPokemon[];
}
export interface PokemonEffect {
    effect: string;
    language: NameUrl;
    short_effect: string;
}
export interface PokemonFlavorText {
    flavor_text: string;
    language: NameUrl;
    version_group: NameUrl;
}
export interface PokemonLanguage {
    language: NameUrl;
    name: string;
}
export interface PokemonAbilityPokemon {
    is_hidden: boolean;
    pokemon: NameUrl;
    slot: number;
}
