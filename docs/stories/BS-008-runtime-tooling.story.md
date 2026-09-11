# Story BS-008 — Runtime, Automações e Instalação

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-007

## História

Como comprador do Builder Squad, quero inicializar, rotear, validar, instalar e retomar projetos por comandos seguros para que o produto funcione como sistema e não apenas como biblioteca de documentos.

## Critérios de aceite

- [x] CLI única expõe validação, diagnóstico, rota, init, status, transição, handoff, pacote, instalação, atualização, restauração e desinstalação recuperável.
- [x] Runtime usa Node 18+ sem dependência externa.
- [x] Inicialização preserva a solicitação e exige finalidade.
- [x] State machine rejeita transição ilegal e release sem aprovação.
- [x] Retry automático não passa de dois ciclos.
- [x] Handoff valida agentes, task e possível segredo.
- [x] Instalação é sidecar e não sobrescreve instruções existentes.
- [x] Atualização forçada preserva instalação anterior como backup.
- [x] Existem adapters para Codex e Claude Code.
- [x] Existem nove automações declarativas auditáveis.
- [x] Testes automatizados cobrem rotas, estados, init, handoff, instalação e validador.

## Definition of Done

- [x] Validador estrutural: PASS 20/20.
- [x] Testes automatizados: PASS 21/21.
- [x] Doctor: PASS.
- [x] Scripts sem dependências de runtime.
- [x] Manifest de tooling atualizado.

## File List

- `package.json`
- `scripts/*.mjs`
- `scripts/lib/*.mjs`
- `automations/*.yaml`
- `adapters/codex/*`
- `adapters/claude-code/*`
- `tests/*.test.mjs`
- `squad.yaml`
- `docs/reports/BS-008-runtime-validation.md`
