import type { ItemAcademico } from "../itens/ItemAcademico";

export interface FiltroItem {
  aceita(item: ItemAcademico): boolean;
}