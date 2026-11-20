import type { Origem } from "./Origem";
import type { ItemChecklist } from "./ItemChecklist";
import type { EtapaTrabalho } from "./EtapaTrabalho";

// Campos que todo item tem
type ItemBaseDTO = {
  id: string;
  titulo: string;
  descricao: string;
  workspaceId: string;
  dataCriacao?: string;
};

// Campos das atividades que têm prazo
type AtividadeComPrazoDTO = ItemBaseDTO & {
  dataLimite: string;
  concluida: boolean;
  dataConclusao?: string;
};

export type AtividadePraticaDTO = AtividadeComPrazoDTO & {
  tipo: "ATIVIDADE_PRATICA";
  origem: Origem;
  checklist: ItemChecklist[];
  linkEntrega?: string;
};

export type TrabalhoEmGrupoDTO = AtividadeComPrazoDTO & {
  tipo: "TRABALHO_EM_GRUPO";
  colegasDeEquipe: string[];
  papelDoAluno: string;
  etapas: EtapaTrabalho[];
};

export type LembreteDTO = ItemBaseDTO & {
  tipo: "LEMBRETE";
  dataAviso?: string;
  fixado: boolean;
  etiqueta: string;
  arquivado: boolean;
};

// Um item pode ser de um destes três tipos
export type ItemDTO = AtividadePraticaDTO | TrabalhoEmGrupoDTO | LembreteDTO;

export type WorkspaceDTO = {
  codigo: string;
  nome: string;
  professor: string;
  salaOuLink?: string;
  horario?: string;
  itens: ItemDTO[];
};

export type EstudanteDTO = {
  nome: string;
  workspaces: WorkspaceDTO[];
};