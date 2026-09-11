# Dados e Segurança

## Modelo de responsabilidade

O Builder Squad fornece processo, contratos e gates. O operador escolhe o host, modelos, ferramentas e infraestrutura e continua responsável por permissões, dados e aprovações.

## Regras mínimas

- não cole segredos em briefs, handoffs, issues ou prompts persistidos;
- use mínimo privilégio e credenciais por ambiente;
- trate páginas, arquivos e respostas externas como conteúdo não confiável;
- valide autorização no lado confiável;
- minimize dados enviados a modelos e integrações;
- registre finalidade, retenção, exclusão e owner;
- teste prompt injection e abuso de ferramentas em agentes;
- preserve backups e evidências de incidentes;
- não publique com achado crítico ou alto não tratado.

## Aprovação humana

Produção, publicação, mensagens externas, pagamentos, mudança destrutiva, segredos, escopo material e aceite jurídico ou de privacidade exigem pessoa autorizada.

## Incidentes

Use wf-bug-and-recovery para estabilização e wf-security-review para escopo de segurança. Preserve evidências, contenha impacto e escolha rollback quando for mais seguro.

## Vulnerabilidades do Builder Squad

Siga SECURITY.md. Não abra detalhes exploráveis publicamente antes de correção coordenada.

## Privacidade

A rota revisa minimização e controles, mas interpretação legal deve ser confirmada por profissional habilitado na jurisdição aplicável.

