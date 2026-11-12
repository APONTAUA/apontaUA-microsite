---
title: Usability & Digital Accessibility
description: Resultados e limitações da avaliação de usabilidade e acessibilidade da MS3.
sidebar_position: 3
---

import StaticLink from '@site/src/components/StaticLink';

# Usabilidade e acessibilidade digital

O relatório MS3 descreve verificações manuais de contraste, zoom a 200%, navegação por teclado e leitura com NVDA, além de Lighthouse e axe DevTools. Os resultados abaixo são os reportados pela equipa na fonte recebida; não foram repetidos de forma independente nesta auditoria.

<StaticLink to="/ms3/source/MS3_Usabilidade_Acessibilidade.docx">Descarregar relatório de usabilidade e acessibilidade (DOCX)</StaticLink>

## Problemas registados na fonte

| Área | Resultado observado | Melhoria proposta no relatório |
| --- | --- | --- |
| Contorno dos botões secundários de notificações no tema claro | Contraste de 1,21:1 sobre fundo da página e 1,13:1 sobre notificações por ler | Aumentar o contraste do contorno e separar visualmente as notificações. |
| Percurso da pesquisa por teclado | São necessários 13 `Tab` até ao primeiro resultado devido ao percurso pelos filtros | Adicionar ligação “Saltar para os resultados”, visível ao receber foco. |
| Ações de administração | A ação de suspensão pode não ser suficientemente clara quanto ao efeito | Tornar a ação e o seu contexto mais explícitos. |

A fonte relata Lighthouse Accessibility 100/100 em 15 ecrãs, zero problemas axe nos ecrãs indicados e verificações NVDA. Estes resultados não anulam os problemas manuais acima nem equivalem a conformidade total; Lighthouse e axe cobrem apenas parte dos critérios.

:::note Escopo
Esta página resume a avaliação submetida para a MS3. Correções devem ser confirmadas na versão atual da aplicação e novamente avaliadas em Light/Dark, teclado e leitor de ecrã.
:::
