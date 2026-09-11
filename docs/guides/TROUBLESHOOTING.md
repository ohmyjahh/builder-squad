# Troubleshooting

## O Builder Chief não fez a pergunta de finalidade

Confirme que o adapter foi ativado e que ele leu agents/builder-chief.md e workflows/wf-intake-and-classify.yaml. Não prossiga com arquitetura antes da resposta.

## O validador acusa componente não listado

O arquivo existe no diretório canônico, mas não está em squad.yaml, ou o manifest aponta para um arquivo ausente. Sincronize os dois lados e execute npm run validate.

## A transição foi rejeitada

Consulte data/state-machine.yaml. Verifique o estado atual, o alvo, os artefatos necessários e a aprovação. Não edite o status para pular fase.

## O retry chegou a dois

Pare de repetir a mesma solução. O Builder Chief deve classificar a causa, mudar a entrada relevante, replanejar ou marcar BLOCKED.

## A instalação já existe

Execute sem --force para preservar tudo. Se quiser atualizar conscientemente, use --force; o instalador moverá a instalação atual para um backup datado.

## O projeto mudou desde o último handoff

Use wf-project-resume. Recalcule impacto, invalide evidências afetadas e preserve tasks que continuam válidas.

## Um agente quer acessar segredo

Registre apenas a referência ao cofre e solicite aprovação. Não cole a credencial em brief, handoff, issue, log ou repositório.

## O YAML parece válido, mas a ferramenta externa recusa

O validador interno garante estrutura e referências, não todas as regras de um runtime de terceiros. Verifique versão do adapter e do runtime. O core continua sendo a fonte canônica.

## GitHub não autentica

Execute gh auth status. Faça login na conta que será dona do repositório e só então crie ou envie o repositório privado.

## Recuperação

Instalações e pacotes substituídos são movidos para caminhos .backup-<timestamp>. Compare, restaure seletivamente e reexecute os testes.

