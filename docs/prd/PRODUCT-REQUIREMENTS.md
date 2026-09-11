# PRD — Builder Squad

**Versão:** 0.1.0  
**Status:** Em elaboração  
**Tipo:** Produto proprietário multiagente  
**Público inicial:** empreendedores, especialistas e prestadores de serviço que desejam construir apps, sistemas, agentes e automações com IA.

## 1. Visão

Permitir que uma pessoa apresente uma ideia uma única vez e seja conduzida por uma equipe de agentes especialistas, através de um processo auditável, até uma solução coerente, validada e adequada ao seu objetivo.

## 2. Problema

Ferramentas de IA conseguem produzir código, layouts, planos e textos, mas o usuário continua responsável por coordenar disciplinas, preservar contexto, resolver contradições e descobrir a sequência correta. Coleções de agentes isolados deslocam o problema de execução para um problema de gestão.

O Builder Squad resolve a coordenação:

- interpreta a demanda;
- identifica lacunas críticas;
- classifica objetivo e complexidade;
- cria uma fonte de verdade;
- escolhe uma rota;
- aciona especialistas na ordem adequada;
- valida cada handoff;
- registra decisões;
- impede avanço quando critérios mínimos não foram atendidos.

## 3. Promessa operacional

Transformar uma demanda em um projeto estruturado, com estratégia, arquitetura, experiência, implementação, validação e plano de operação ou lançamento, utilizando agentes especializados coordenados por um workflow único.

## 4. Princípios do produto

1. **Uma entrada:** o usuário fala prioritariamente com o Builder Chief.
2. **Perguntar antes de produzir:** lacunas de alto impacto devem ser resolvidas antes da execução.
3. **Interno não é mercado:** a finalidade do projeto define uma rota distinta.
4. **Task-first:** cada entrega nasce de uma task com contrato explícito.
5. **Memória externa:** decisões vivem em arquivos, não apenas no contexto do modelo.
6. **Roteamento mínimo suficiente:** apenas especialistas necessários são ativados.
7. **Gates com veto:** qualidade não é recomendação opcional.
8. **Humano no controle:** decisões irreversíveis ou de alto risco exigem aprovação.
9. **Portabilidade:** contratos do núcleo independem do provedor de IA.
10. **Evidência:** conclusões devem apontar artefatos, testes ou premissas.

## 5. Classificação obrigatória: interno ou mercado

O diagnóstico inicial deve perguntar explicitamente:

> Este projeto será usado internamente no seu negócio ou será colocado no mercado para clientes e usuários externos?

### 5.1 Rota interna

Otimiza um processo existente. Prioriza:

- dono do processo;
- usuários internos;
- redução de tempo, custo ou erro;
- integração com ferramentas atuais;
- permissões e dados corporativos;
- adoção da equipe;
- continuidade operacional;
- retorno sobre investimento.

Artefatos adicionais:

- mapa do processo atual e futuro;
- baseline operacional;
- matriz de acesso;
- plano de adoção;
- plano de contingência;
- medição antes/depois.

### 5.2 Rota de mercado

Cria um produto para usuários externos. Prioriza:

- segmento e problema;
- validação de demanda;
- diferenciação;
- monetização;
- onboarding;
- analytics de produto;
- privacidade e termos;
- suporte;
- confiabilidade;
- go-to-market.

Artefatos adicionais:

- ICP e proposta de valor;
- evidências de problema;
- hipótese de preço;
- eventos de analytics;
- requisitos de suporte;
- checklist de prontidão comercial;
- plano de lançamento.

### 5.3 Rota híbrida

Projetos internos com intenção futura de venda devem ser marcados como `hybrid`. O MVP segue a rota interna, mas arquitetura, dados e licenciamento devem preservar uma migração futura para `market`.

## 6. Usuários

### 6.1 Builder iniciante

Sabe descrever o problema, mas não domina produto ou desenvolvimento. Precisa de linguagem simples, escolhas orientadas e proteção contra complexidade prematura.

### 6.2 Builder intermediário

Já usa ferramentas de vibe coding. Precisa de estrutura, revisão, arquitetura e consistência entre disciplinas.

### 6.3 Especialista ou prestador de serviço

Constrói para clientes. Precisa de escopo, proposta, rastreabilidade, aceite e handoff profissional.

### 6.4 Empreendedor

Constrói para a própria operação ou para o mercado. Precisa conectar decisões técnicas a valor, custo, risco e resultado.

## 7. Capacidades obrigatórias

### CAP-01 — Intake e diagnóstico

- Capturar demanda em linguagem natural.
- Perguntar finalidade: `internal`, `market` ou `hybrid`.
- Distinguir fatos, hipóteses, restrições e desejos.
- Classificar tipo, risco, complexidade e confiança.
- Fazer apenas perguntas que alterem rota ou escopo.

### CAP-02 — Briefing canônico

- Criar identificador do projeto.
- Registrar objetivo, usuários, resultado, restrições e não objetivos.
- Manter log de decisões e dúvidas abertas.
- Versionar mudanças materiais de escopo.

### CAP-03 — Roteamento

- Selecionar workflow adequado.
- Pular especialistas irrelevantes.
- Impedir execução com confiança insuficiente.
- Gerar briefing de handoff limitado e estruturado.

### CAP-04 — Planejamento task-first

- Decompor em épicos, stories e tasks.
- Definir dependências e ordem.
- Incluir critérios de aceite e Definition of Done.
- Identificar caminho crítico e riscos.

### CAP-05 — Execução especializada

- Estratégia de produto.
- Gestão de escopo e projeto.
- Arquitetura.
- UX/UI.
- Dados.
- Backend.
- Frontend.
- Agentes e automações.
- Integrações.
- QA e segurança.
- DevOps e release.
- Growth e vendas quando aplicável.

### CAP-06 — Qualidade e correção

- Rodar gate por fase.
- Registrar achados por severidade.
- Devolver correções ao responsável.
- Limitar ciclos automáticos de retrabalho.
- Escalar impasses ao usuário.

### CAP-07 — Estado e retomada

- Exibir status atual.
- Retomar execução sem reconstruir todo o contexto.
- Detectar artefatos ausentes ou desatualizados.
- Registrar handoffs consumidos.

### CAP-08 — Portabilidade e instalação

- Núcleo canônico versionado.
- Adaptadores para ambientes suportados.
- Verificação de pré-requisitos.
- Instalação, atualização, diagnóstico e remoção documentados.

## 8. Requisitos não funcionais

- **Segurança:** nenhum segredo em prompts ou repositório.
- **Privacidade:** minimizar dados pessoais e permitir remoção do estado local.
- **Auditabilidade:** toda decisão material deve ter autor, data e justificativa.
- **Confiabilidade:** workflows devem ser determinísticos quanto a gates e transições.
- **Usabilidade:** o usuário não precisa conhecer o nome do agente correto.
- **Portabilidade:** lógica do domínio separada de adaptadores.
- **Recuperação:** falhas não podem corromper artefatos válidos.
- **Custo:** rotas devem evitar agentes desnecessários.

## 9. Fora de escopo da V1

- Prometer construção totalmente autônoma de qualquer software.
- Publicar em produção sem aprovação humana.
- Manter credenciais de clientes.
- Suportar toda linguagem, framework e plataforma.
- Substituir aconselhamento jurídico, contábil ou de segurança especializado.
- Criar marketplace ou cobrança recorrente dentro do núcleo do squad.

## 10. Métricas de sucesso

- Percentual de projetos classificados corretamente.
- Tempo entre demanda e briefing aprovado.
- Percentual de tasks aceitas no primeiro gate.
- Número de contradições entre artefatos.
- Ciclos médios de retrabalho.
- Taxa de retomada bem-sucedida.
- Tempo até primeiro resultado executável.
- Satisfação do usuário por fase.
- Taxa de conclusão por rota.

## 11. Critério de lançamento V1

A V1 estará pronta quando:

- executar do intake ao encerramento em ao menos um projeto interno e um projeto de mercado;
- produzir todos os artefatos obrigatórios;
- bloquear caminhos inválidos;
- retomar após interrupção;
- passar validação estrutural em modo estrito;
- possuir instalação e desinstalação testadas;
- ter documentação suficiente para um comprador operar sem assistência síncrona.
