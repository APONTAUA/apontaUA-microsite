# Auditoria documental MS3 — ApontaUA

**Data:** 9 de novembro de 2026  
**Âmbito:** microsite, fontes fornecidas, guia MS3, repositório local da implementação e evidência documental disponível.

## Síntese

O ZIP inclui apresentação MS3, cinco documentos DOCX (requisitos legais, termos e condições, gestão de equipa, riscos técnicos, usabilidade/acessibilidade) e três diagramas PNG. Foram analisadas ainda as três especificações de requisitos e o guião MS3. A arquitetura de referência é monólito modular: React/TypeScript/Vite, FastAPI, PostgreSQL, NGINX, armazenamento de ficheiros, WSO2 + IdP UA, Exim SMTP/mail.ua.pt e Docker. A decisão WSO2/IdP é a arquitetura-alvo. A minuta 05 regista que a equipa deve pedir expressamente ao orientador o encaminhamento aos STIC para obtenção do token. A Minuta 05 regista a ação por fazer. A equipa espera receber acesso no âmbito académico; o pedido e token ainda não estão evidenciados como concluídos. O risco MS3 identifica OIDC como protocolo pretendido, mas endpoints, atributos e sessões seguem as indicações de configuração dos STIC.

## Inventário e estado

| Artefacto | Existe? | Estado | Problema identificado | Ação necessária |
|---|---|---|---|---|
| Apresentação MS3 | Sim | Evidência de apresentação | Não substitui especificações; métricas visuais são autorrelatadas | Referenciar como contexto, validar por testes próprios |
| Requisitos legais | Sim | Análise preliminar | Base legal, retenção, DPIA e aplicabilidade carecem de validação institucional | Rever com orientadores/EPD |
| Termos e condições | Sim | Rascunho | Contacto, operador e data de vigência pendentes | Aprovação institucional antes de publicar |
| Gestão da equipa | Sim | Capturas de estado | Issues em Open/Todo; snapshot antigo; refs RN-019A/B não canónicas | Confirmar GitHub ao vivo e corrigir IDs |
| Riscos técnicos | Sim | Registo de riscos | Refere RF-103, inexistente (catálogo termina em RF-100) | Corrigir rastreio |
| Usabilidade/acessibilidade | Sim | Avaliação documentada | Acessibilidade inclui 3 problemas indicados; evidência Lighthouse/axe/NVDA não foi repetida nesta auditoria | Reproduzir auditorias |
| Diagramas de domínio/casos de uso/arquitetura | Sim | PNG não editável | Cardinalidades e detalhes precisam de validação | Reconstruir editáveis e validar relações |
| RF | Sim | 100 requisitos, v2.0 | Referências antigas à autenticação local; RF-002/RN-001 e RF-035/056..058/060..068 desalinhados com IdP e âmbito MS3 | Alinhados com autenticação IdP, pesquisa MVP por título/descrição/metadados, RF-059 hash exato no MVP e OCR/similaridade no semestre 2 |
| RN | Sim | 140 regras, v1.1 | Regras de registo/verificação e pesquisa foram alinhadas com IdP e âmbito MS3; RN-064 hash exato fica no MVP; RN-019A/B não existem | Escopo futuro separado; corrigir refs não canónicas |
| NFR | Sim | 73 requisitos, v2.0 | Vários valores operacionais por definir; dependências institucionais | Atribuir método/critério e responsáveis |
| ADR v2 | Sim | Proposta para validação | Não consta aprovação formal | Registar decisão e aprovadores |
| Testes / CI da implementação | Não encontrados | Não demonstrado | Sem testes nem workflows localizados no repositório de implementação | Criar estratégia e pipeline |
| Template Word institucional | Não encontrado | Ausente | Apenas guião PDF com identidade gráfica; sem template DOCX/DOTX | Aplicar formato provisório baseado no guião |

## Estado da implementação (inspecção local)

A aplicação encontra-se em scaffolding: backend FastAPI com health/live e health/ready e configuração PostgreSQL; campos OIDC opcionais ainda aguardam confirmação do IdP institucional. Frontend React/TypeScript/Vite é um ecrã inicial. Compose inclui PostgreSQL e volume de ficheiros. Não foram encontrados módulos de autenticação operacional, entidades/domínio, rotas funcionais, testes automatizados, CI, WSO2 ou integração de email. Portanto, os requisitos são especificação/planeamento, não funcionalidades entregues. Credenciais presentes no Compose são de desenvolvimento local e devem ser externalizadas antes de ambientes partilhados.

## Comparação com guião oficial MS3

O guião consultado define três pilares: requisitos legais (RGPD, licenciamento, regulamentação e termos), riscos técnicos (dependências, dívida técnica, componentes frágeis) e usabilidade/acessibilidade. O pacote contém um artefacto para cada pilar, pelo que a estrutura temática existe. A evidência consultada não permite declarar conformidade plena: itens legais estão preliminares; os riscos têm referências inválidas; a avaliação acessível apresenta problemas e não foi reproduzida independentemente; documentação de suporte e rastreabilidade permanecem incompletas.

## Pendências prioritárias

1. Enviar pedido expresso ao orientador para encaminhamento aos STIC e obtenção do token de permissão. OIDC é pretendido; confirmar endpoints, atributos e sessão na resposta/configuração STIC.
2. Decidir domínios de email e diferença entre verificação de endereço e afiliação institucional.
3. O âmbito MS3 classifica pesquisa de título/descrição/metadados e hash exato (RF-059/RN-064) como MVP; OCR, extração de texto e similaridade avançada como evolução do semestre 2. Manter essa classificação nos RF/RN/NFR.
4. Validar retenção, base legal, DPIA, licenças, T&C, eliminação e backups com responsáveis institucionais.
5. Confirmar GitHub issues/projetos atuais: capturas indicam 0/7 e estados Open/Todo; acesso em tempo real não foi verificado.
6. Clarificar divergência de nome Marcelo Junior vs Marcelo Lino encontrada noutras minutas.
7. Definir os parâmetros NFR em aberto: concorrência, volume, latência, disponibilidade, RTO/RPO, limites de upload e compatibilidade.
8. Criar testes/CI e ligar casos de uso e critérios de aceitação aos IDs canónicos.

## Limites desta auditoria

As fontes externas foram analisadas localmente. GitHub Projects/Issues não foram consultados ao vivo. Os resultados Lighthouse/axe/NVDA são relatados nos materiais recebidos, não reexecutados. Não foi encontrada plantilla institucional editável; os DOCX produzidos usam formatação provisória inspirada no guião MS3, não uma plantilla oficial.
