import type { Estudante } from "../Estudante";

export interface RepositorioEstudante {
  carregar(): Estudante | null;
  salvar(estudante: Estudante): void;
}