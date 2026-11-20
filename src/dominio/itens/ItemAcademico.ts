import { ErroDominio } from "../erros/ErroDominio";
import { ItemDTO } from "../tipos/dtos";
import { Origem } from "../tipos/Origem";

export abstract class ItemAcademico {
    protected readonly id:string;
    protected titulo:string;
    protected descricao:string;
    protected readonly dataCriacao: Date;
    protected readonly workspaceId: string;

    constructor(id:string, titulo:string, descricao:string, workspaceId: string, dataCriacao?: Date) {
        this.id = this.validarIdentificador(id);
        this.titulo = this.validarTitulo(titulo);
        this.descricao = this.validarDescricao(descricao);
        this.workspaceId = this.validarWorkspaceId(workspaceId);
        this.dataCriacao = dataCriacao ? new Date(dataCriacao.getTime()) : new Date();
    }

    //getters ==============================================


    obterTitulo():string {
        return this.titulo;
    }

    obterDescricao():string{
        return this.descricao;
    }

    obterDataCriacao():Date {
        return new Date(this.dataCriacao.getTime());
    }

    obterWorkspaceId():string{
        return this.workspaceId;
    }

    //setters  alteração  ===========================================

    alterarTitulo(titulo: string):void{
        this.titulo = this.validarTitulo(titulo);
    }

    alterarDescricao(descricao:string):void{
        this.descricao = this.validarDescricao(descricao);
    }


    //metodos concretos ==========================================

    contemTexto(texto:string): boolean{
        let textoMinusculo = texto.trim().toLowerCase();
        if (textoMinusculo.length === 0) {
            return true; // Se o texto de busca estiver vazio, considera que todos os itens contêm o texto
        }
        return this.titulo.toLowerCase().includes(textoMinusculo) || this.descricao.toLowerCase().includes(textoMinusculo);
    }


    protected validarTitulo(titulo: string): string {
        let semEspacos = titulo.trim();
        if (semEspacos.length === 0) {
            throw new ErroDominio("O título não pode estar vazio.");
        }
        return semEspacos;
    }

    protected validarDescricao(descricao: string): string {
        let semEspacos = descricao.trim();
        if (semEspacos.length === 0) {
            throw new ErroDominio("A descrição não pode estar vazia.");
        }
        return semEspacos;
    }

    private validarIdentificador(valor: string):string{
        const semEspacos = valor.trim();
        if (semEspacos.length === 0) {
            throw new ErroDominio("O identificador não pode estar vazio.");
        }
        return semEspacos;
    }

    private validarWorkspaceId(valor: string):string{
        const semEspacos = valor.trim();
        if (semEspacos.length === 0) {
            throw new ErroDominio("O identificador do workspace não pode estar vazio.");
        }
        return semEspacos;
    }
    
    consultarIdentificador(): string {  // ele retorna o id, mas se for apenas para velo trocar por um console.log(this.id) ou um obterter
        return this.id;
    }

    resumoBasico():string {
        return (`Titulos:${this.titulo}, Identificador: ${this.id}, Descrição: ${this.descricao}, DataCriação: ${this.dataCriacao}, indentificador Workspace: ${this.workspaceId}`)
    }

    //metodos abstratos obrigatorios =====================================

    abstract obterCategoria(): string; //  retorna a categoria textual do item

    abstract  estaPendente(agora?: Date): boolean; // indica se o item representa uma obrigação que ainda requer ação do aluno

    abstract  obterExibicaoFormatada(): string; // retorna um texto resumido e amigável formatado para apresentação

    abstract paraDTO():ItemDTO;


    // ganchos  =========================================
    
    estaConcluido(): boolean{ // Implementação padrão, pode ser sobrescrita pelas subclasses
        return false;
    }

    estaAtrasado(_agora?: Date): boolean{
        return false;
    }

    estaFixado(): boolean{
        return false;
    }

    obterPrazo(): Date | undefined {
        return undefined;
    }

    obterOrigem(): Origem | undefined {
        return undefined;
    }

    obterDataConclusao(): Date | undefined {
        return undefined;
    }

    contaComoAtividade():boolean{
        return false;
    }

}