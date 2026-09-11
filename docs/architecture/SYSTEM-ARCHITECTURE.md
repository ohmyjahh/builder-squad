# Arquitetura do Builder Squad

**Versão:** 0.1.0  
**Status:** Proposta inicial

## 1. Visão geral

O Builder Squad utiliza uma arquitetura de controle central com execução especializada e memória baseada em artefatos.

```text
Usuário
  |
  v
Builder Chief
  |
  +--> Intake e classificação
  |      +--> internal
  |      +--> market
  |      +--> hybrid
  |
  +--> Router
  |      +--> rota mínima necessária
  |
  +--> Workflow Engine
  |      +--> task atual
  |      +--> dependências
  |      +--> quality gate
  |      +--> retry/escalation
  |
  +--> Especialistas
  |      +--> artefatos versionados
  |
  +--> Reviewer
         +--> PASS | CONCERNS | FAIL | BLOCKED
```

## 2. Camadas

### 2.1 Experience layer

Porta de entrada, linguagem simples, comandos, onboarding e apresentação de progresso.

### 2.2 Orchestration layer

Diagnóstico, confiança, roteamento, estados, dependências, handoffs, gates, retry e escalonamento.

### 2.3 Specialist layer

Agentes especialistas executam tasks atômicas dentro de fronteiras explícitas.

### 2.4 Artifact layer

Fonte de verdade do projeto: briefing, decisões, arquitetura, tasks, testes, status e release.

### 2.5 Adapter layer

Mapeia o núcleo para ambientes como Codex e Claude Code sem alterar contratos canônicos.

## 3. Componentes do núcleo

### Builder Chief

- único contato padrão do usuário;
- diagnostica e classifica;
- cria briefing;
- seleciona workflow;
- delega;
- governa estados;
- não substitui o especialista.

### Router

Recebe `project_profile` e devolve uma rota com justificativa, confiança e especialidades exigidas.

### Workflow Engine

Modelo inicial de estados:

```text
NEW
  -> DISCOVERY
  -> CLASSIFIED
  -> BRIEFED
  -> PLANNED
  -> IN_EXECUTION
  -> IN_REVIEW
  -> NEEDS_REVISION | READY_FOR_RELEASE | BLOCKED
  -> RELEASED
  -> MEASURING
  -> COMPLETE
```

### Artifact Registry

Mantém catálogo de artefatos, versão, responsável, dependências, status e hash lógico de conteúdo.

### Decision Log

Separa:

- fato confirmado;
- hipótese;
- decisão;
- alternativa descartada;
- dívida aceita;
- questão aberta.

### Quality Gate Engine

Cada gate devolve:

- `PASS`: fase concluída;
- `CONCERNS`: pode seguir com riscos registrados e aprovação;
- `FAIL`: retorna para correção;
- `BLOCKED`: depende de usuário ou sistema externo.

### Recovery Manager

- limita ciclos de correção;
- preserva último artefato válido;
- registra falha;
- permite retomar pelo último checkpoint.

## 4. Contrato de task

Toda task deve conter:

```yaml
id: TASK-XXX
name: kebab-case
owner: agent-id
purpose: resultado atômico
inputs: []
preconditions: []
steps: []
outputs: []
acceptance_criteria: []
quality_gate: checklist-id
on_pass: next-task-or-router
on_fail: correction-task
max_retries: 2
human_approval: when-needed
```

## 5. Contrato de handoff

Todo handoff deve conter:

- projeto e versão;
- origem e destino;
- task concluída;
- demanda objetiva;
- fatos conhecidos;
- hipóteses marcadas;
- decisões vigentes;
- arquivos de entrada;
- saída esperada;
- critérios de aceite;
- riscos e dúvidas abertas;
- próximo gate.

O agente receptor não deve depender do histórico completo da conversa.

## 6. Matriz inicial de roteamento

| Condição | Agentes/fases adicionais |
|---|---|
| `purpose=internal` | process analyst, adoption, ROI, access control |
| `purpose=market` | product strategy, research, pricing, analytics, support, GTM |
| `purpose=hybrid` | rota interna + requisitos de portabilidade para mercado |
| Dados sensíveis | security e privacy obrigatórios |
| Pagamento | payments, security, failure recovery |
| Multiusuário | auth, roles, tenancy e audit log |
| Integrações externas | integration specialist + fallback |
| IA generativa | agent architect + evaluation suite |
| Produção pública | QA + security + DevOps + rollback |
| Venda para cliente | scope, proposal, acceptance e handoff |

## 7. Estrutura de um projeto gerenciado

```text
projects/{project-id}/
├── project.yaml
├── status.yaml
├── brief/
├── discovery/
├── product/
├── architecture/
├── design/
├── data/
├── implementation/
├── integrations/
├── qa/
├── release/
├── growth/
├── tasks/
├── handoffs/
└── decisions/
```

## 8. Segurança e autoridade

Exigem aprovação humana explícita:

- exclusão ou sobrescrita material;
- alteração de produção;
- migração destrutiva;
- compra, cobrança ou pagamento;
- envio externo em nome do usuário;
- publicação pública;
- tratamento de segredo ou credencial;
- mudança relevante de escopo.

## 9. Diferenciação defensável

A vantagem não dependerá de prompts secretos isolados. Ela será acumulada em:

- ontologia de projetos;
- catálogo de rotas;
- contratos de tasks;
- critérios de qualidade;
- memória e handoffs;
- heurísticas de diagnóstico;
- exemplos avaliados;
- telemetria de falhas;
- atualizações contínuas.

Prompts podem ser copiados. Um sistema coerente de decisões, dados, validações e melhoria contínua é substancialmente mais difícil de reproduzir.
