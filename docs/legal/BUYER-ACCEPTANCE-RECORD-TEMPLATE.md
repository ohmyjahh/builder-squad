# Registro de Aceite do Comprador — Modelo

## Pedido

- Pedido: `[ID]`.
- Data/hora/fuso: `[DATA]`.
- Canal: `[CHECKOUT/CONTRATO]`.
- Oferta: `[NOME/VERSÃO/URL OU SNAPSHOT]`.
- Preço e condição: `[VALOR/PARCELAMENTO]`.

## Comprador

- Nome/razão social: `[COMPRADOR]`.
- CPF/CNPJ: `[DOCUMENTO]`.
- E-mail: `[E-MAIL]`.

## Versões aceitas

- Produto: `[VERSÃO]`.
- Licença Comercial: `[VERSÃO/HASH]`.
- Termos de Uso e Venda: `[VERSÃO/HASH]`.
- Política de Privacidade: `[VERSÃO/HASH]`.
- Política de Reembolso: `[VERSÃO/HASH]`.
- Aviso de IA e Dados: `[VERSÃO/HASH]`.

## Evidência

- Checkbox não pré-marcado: `[SIM/NÃO/NÃO APLICÁVEL]`.
- Texto apresentado antes do pagamento: `[SIM/NÃO]`.
- Links ou cópia fornecida após a compra: `[SIM/NÃO]`.
- IP/user-agent ou assinatura, quando necessário e proporcional: `[REGISTRO]`.
- Consentimentos opcionais separados: `[REGISTRO]`.

## Entrega

- Meio: `[ÁREA/REPO/LINK]`.
- Data/hora: `[DATA]`.
- Certificado de licença: `[ID]`.
- Release manifest/hash: `[REFERÊNCIA]`.

## Eventos posteriores

| Data | Evento | Responsável | Evidência |
|---|---|---|---|
| `[DATA]` | `[SUPORTE/REEMBOLSO/ALTERAÇÃO]` | `[NOME]` | `[LINK/ID]` |
