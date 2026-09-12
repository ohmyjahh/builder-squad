# Aviso de Inteligência Artificial, Dados e Provedores

**Versão:** 1.0-draft
**Atualizado em:** 2026-09-12

## 1. Papel do Builder Squad

O Builder Squad organiza instruções, tarefas, agentes e controles para apoiar projetos. Ele não substitui julgamento humano, especialista regulado, teste de segurança ou aceite do responsável pelo projeto.

## 2. Operação local

O core funciona em arquivos locais por padrão. Dados só deixam o ambiente quando o usuário utiliza uma ferramenta, modelo, integração, repositório, banco, mensageria ou serviço externo configurado por ele.

## 3. Responsabilidade por provedores

O comprador escolhe, contrata e configura provedores. Deve avaliar:

- termos e política de privacidade;
- localização e retenção dos dados;
- uso de conteúdo para treinamento;
- controles empresariais e exclusão;
- subprocessadores;
- confidencialidade;
- limites, custo e disponibilidade;
- propriedade e restrições sobre saídas.

Codex, OpenAI, Claude, Anthropic, GitHub e demais nomes pertencem a seus titulares. A compatibilidade do adapter não representa parceria ou endosso.

## 4. Dados proibidos por padrão

Não inserir sem necessidade, autorização, base legal e configuração apropriada:

- senhas, tokens, chaves privadas e credenciais;
- dados pessoais excessivos;
- dados sensíveis;
- segredo de cliente;
- prontuário, informação financeira regulada ou dado de criança;
- código ou documento que o usuário não pode compartilhar.

Use dados sintéticos, mascaramento e mínimo necessário sempre que possível.

## 5. Revisão humana obrigatória

Saídas de IA podem conter erro, omissão, dependência inexistente, vulnerabilidade, preconceito, conteúdo de terceiro ou recomendação inadequada. Revisão humana e testes são obrigatórios antes de:

- publicar ou enviar a terceiros;
- executar em produção;
- gastar dinheiro;
- excluir ou migrar dados;
- assumir obrigação contratual;
- tomar decisão com impacto relevante;
- operar em domínio regulado.

## 6. Código, conteúdo e propriedade intelectual

O comprador deve revisar similaridade, licenças e direitos antes de usar saída de IA. Nem o Builder Squad nem o fornecedor garantem exclusividade, registrabilidade ou ausência de direito de terceiro em conteúdo gerado por modelos.

A titularidade entre fornecedor e comprador é tratada na Licença Comercial, mas permanece subordinada à lei e aos termos dos provedores e componentes usados no projeto.

## 7. Dados de clientes do comprador

Ao usar o Produto para cliente, o comprador deve definir papéis de controlador e operador, transparência, instruções, segurança, retenção, subprocessadores e resposta a incidentes. A mera licença do Builder Squad não transforma automaticamente a SOW HOUSE em operadora dos dados desse projeto.

Se o suporte exigir acesso a dados pessoais, deve ser aplicado o DPA e o princípio do mínimo necessário.

## 8. Automações e agentes

Agentes e automações devem operar com:

- privilégio mínimo;
- allowlist de ferramentas;
- limites de custo e escopo;
- logs proporcionais;
- idempotência e rollback quando aplicável;
- aprovação explícita para ações externas ou irreversíveis;
- proteção contra instrução maliciosa e vazamento de contexto.

## 9. Incidentes

Interrompa a integração afetada, preserve evidências, revogue credenciais expostas, avalie impacto e acione os responsáveis. Não publique credencial ou dado pessoal em issue aberta.

## 10. Ausência de garantia de resultado

IA é probabilística e provedores mudam. O Produto não garante precisão total, receita, conformidade automática, segurança absoluta ou continuidade de serviço de terceiros.
