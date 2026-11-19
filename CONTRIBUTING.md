# Guia de Contribuição

Este documento define as regras e os padrões obrigatórios para o desenvolvimento e envio de código para este projeto.

## 1. Fluxo de Trabalho
1. Abra uma **Issue** (descrevendo a tarefa ou bug).
2. Crie uma **Branch** a partir da `main` atualizada.
3. Faça os **Commits** semânticos.
4. Envie a branch e abra um **Pull Request (PR)**.
5. Aguarde o **Code Review** e as aprovações.
6. Realize o **Merge**

## 2. Padrão de Nomenclatura de Branches
Sempre use um dos prefixos abaixo, seguido do nome da tarefa:
*   `feature/` (Nova funcionalidade)
*   `fix/` (Correção de bug)
*   `docs/` (Documentação)
*   `refactor/` (Reestruturação de código)

*   **Exemplo:** `feature/autenticacao-usuario`

## 3. Padrão de Commits (Conventional Commits)
Formato: `tipo: descrição curta no imperativo`.
*   `feat: adiciona sistema de login`
*   `fix: corrige erro de validação no formulário`
*   `docs: atualiza instruções de instalação`
*   `refactor: simplifica função de cálculo`


---

## 📋 Modelos Obrigatórios (Copiar e Colar)
 > troque o que esta escrito pelo seu conteudo!

## Modelo de Issue
```
## Contexto
[Explique brevemente o problema ou a funcionalidade desejada]

## Critérios de Aceitação (quando necessario)
- [ ] [O que precisa ser feito para considerar esta tarefa concluída]
- [ ] [Outro item testável]
```
---

## Modelo de Pull Request (PR)
````
## O que foi feito
[Breve descrição do que foi alterado/adicionado]

## Por que
Atende ao pedido registrado na Issue #X.

## Checklist de Autoavaliação (quando necessario)
- [ ] Código compila e roda sem erros localmente
- [ ] Testes automatizados passando (se aplicável)
- [ ] Segue os padrões de estilo do projeto

## Issue relacionada
**Closes #X**
````