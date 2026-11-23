import type { ItemAcademico } from "../itens/ItemAcademico";

export interface CriterioOrdenacao {
  comparar(a: ItemAcademico, b: ItemAcademico): number;
}

