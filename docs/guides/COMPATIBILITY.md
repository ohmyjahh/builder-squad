# Matriz de Compatibilidade

## Núcleo

- Node.js: 18 ou superior.
- Git: qualquer versão capaz de operar o repositório local.
- Sistema: macOS, Linux ou Windows com Node.
- Dependências de runtime: nenhuma.

## Adapters

| Capacidade | Codex | Claude Code | Fallback |
|---|---|---|---|
| Instruções de projeto | AGENTS.md por referência | CLAUDE.md por referência | Ler adapter manualmente |
| Tasks canônicas | Sim | Sim | Abrir arquivo da task |
| Multiagente | Quando o host disponibilizar | Quando o host disponibilizar | Executar papéis sequencialmente |
| Memória em arquivos | Sim | Sim | Sistema de arquivos local |
| Handoffs | Sim | Sim | Script create-handoff |
| Gates | Sim | Sim | Checklist manual |
| CLI | Node 18+ | Node 18+ | Operação manual pelos templates |

## Equivalência

Ambientes suportados devem produzir os mesmos contratos: project, status, brief, decision, handoff, gate e closure. A forma de ativar agentes pode mudar; os artefatos e decisões não.

## Limitações

- O core não instala provedores de IA, banco, deploy ou mensageria.
- Permissões dependem do host e precisam ser confirmadas.
- Integrações externas exigem adapters e credenciais locais.
- O validador estrutural não substitui um parser completo do runtime de terceiros.

