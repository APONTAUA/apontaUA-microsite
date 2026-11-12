---
title: Technical Risks
description: Dependências, riscos técnicos e mitigação apresentados na MS3.
sidebar_position: 2
---

import StaticLink from '@site/src/components/StaticLink';

# Riscos técnicos

A análise MS3 considera a arquitetura de referência: React, TypeScript e Vite; FastAPI; PostgreSQL; armazenamento persistente de ficheiros; NGINX; WSO2 integrado com o IdP da UA; Exim SMTP/mail.ua.pt; Docker; alojamento no IT. Distingue limitações observadas no protótipo, riscos arquiteturais e medidas preventivas.

<StaticLink to="/ms3/source/MS3_Riscos_Tecnicos.docx">Descarregar o documento de riscos técnicos da MS3 (DOCX)</StaticLink> · <StaticLink to="/ms3/source/MS3_Gestao_Equipa.docx">Descarregar o documento de gestão da equipa (DOCX)</StaticLink>

## Dependências e autenticação

| Dependência | Função | Impacto de falha descrito na MS3 |
| --- | --- | --- |
| WSO2 / IdP UA | Autenticação institucional | Sem autenticação, utilizadores não acedem e o piloto não começa. |
| PostgreSQL | Dados, versões e registos | Operações essenciais indisponíveis ou inconsistentes. |
| Armazenamento de ficheiros | Originais dos materiais | Materiais indisponíveis ou perdidos. |
| Infraestrutura do IT | Alojamento, rede e proxy | Plataforma inacessível. |
| Exim SMTP / mail.ua.pt | Notificações por email | Falha de entrega; notificações internas devem continuar disponíveis. |
| Dependências de software | Interface, backend e serviços | Vulnerabilidades, incompatibilidades e obrigações de licença. |

A análise de riscos aponta **OIDC como protocolo pretendido**, ainda sujeito a confirmação técnica. A Minuta 05 regista a ação da equipa: pedir ao orientador o encaminhamento aos STIC para obtenção do token de permissão. A equipa espera receber acesso no âmbito académico; o token, endpoints, atributos e regras de sessão ainda não constam como configurados. A implementação local também não demonstra autenticação operacional.

## Âmbito funcional usado na análise de riscos

- **MVP:** pesquisa por títulos, descrições e metadados, com navegação pela estrutura académica; deteção de duplicados exatos por hash SHA-256.
- **Segundo semestre:** extração de texto, OCR e análise avançada de semelhanças. Estes itens não são critérios de aceitação do MVP.
- Similaridade não constitui prova automática de plágio nem deve bloquear automaticamente a publicação.

Esta classificação está refletida nos RF/RN consolidados: RF-059 e RN-064 mantêm a deteção por hash no MVP; RF-056–058, RF-060–068 e RN-056–063, RN-065–080 ficam como evolução futura.

## Riscos prioritários e medidas

- **Integração institucional:** isolar o adaptador de identidade, manter segredos fora do código e validar tokens/atributos no backend. Usar dados fictícios para desenvolvimento enquanto decorre o pedido aos STIC.
- **Persistência dividida:** proteger consistência entre ficheiro e metadados, testar restauro e manter originais separados de derivados.
- **Dados pessoais nos ficheiros:** não há OCR no MVP para detetar automaticamente dados pessoais; informar quem publica e fornecer mecanismos de denúncia/remoção.
- **Âmbito de pesquisa:** agora consolidado conforme MS3 em RF-035 e nos requisitos futuros.
- **CI, dependências e licenças:** a fonte recomenda revisão de dependências, análise de vulnerabilidades/licenças e testes de regressão automatizados.

A fonte MS3 contém uma referência a RF-103, mas o catálogo canónico termina em RF-100. A referência foi registada como inválida no relatório de inconsistências e não foi tratada como requisito.

:::note Estado do código
Na revisão do repositório de implementação foram encontrados scaffolding FastAPI/React, health checks e configuração de PostgreSQL/Compose. Não foram encontrados a integração WSO2, módulos funcionais, testes automatizados ou CI no repositório analisado; portanto, os controlos acima são riscos e medidas propostos, não funcionalidades implementadas.
:::

