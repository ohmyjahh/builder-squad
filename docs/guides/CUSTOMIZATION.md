# Customização Segura

## Princípio

Customize a camada de adapter, extensão ou catálogo. Preserve contratos do núcleo para continuar usando workflows, validação e atualização.

## Formas de extensão

### Novo agente

1. Defina missão que não se sobreponha.
2. Declare quando usar e quando pular.
3. Crie tasks antes de comandos.
4. Adicione entradas, saídas, vetos e handoffs.
5. Atualize blueprint e manifest.
6. Adicione testes de cobertura.

### Nova task

Use o arquivo templates/task-contract.md. A task deve produzir resultado atômico, ter um owner e conhecer o próximo gate.

### Novo workflow

Reutilize tasks existentes. Declare finalidade, invariantes, fases, branches, gates, aprovações e conclusão. Não copie regras de qualidade: referencie checklists.

### Novo gate

Defina evidências mínimas, checklist, vetos e os quatro vereditos. Um gate sem retorno responsável não é executável.

### Novo adapter

Mantenha instruções específicas fora do core. O adapter deve apontar para agentes, tasks, workflows e checklists canônicos.

## Configuração local

Segredos e configuração privada devem usar mecanismos do ambiente e arquivos ignorados. Nunca altere templates canônicos para inserir credenciais.

## Compatibilidade

Mudança quebradora exige:

- nova versão de contrato;
- migração;
- changelog;
- teste de instalação e retomada;
- atualização dos dois adapters.

## Validação

    npm run validate
    npm test
    npm run doctor

