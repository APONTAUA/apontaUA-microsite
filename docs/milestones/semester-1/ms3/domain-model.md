---
title: Domain Model
description: Modelo conceptual MS3 e ficheiros reconstruídos.
sidebar_position: 4
---

import diagram from '@site/static/ms3/diagrams/Modelo_Dominio.png';
import StaticLink from '@site/src/components/StaticLink';


# Modelo de Domínio

Reconstruído a partir do PNG recebido. O PNG não expõe os dados-fonte Draw.io; esta versão editável é uma reconstrução conceptual, com relações/cardinalidades que devem ser validadas pela equipa. Não representa o esquema físico da base de dados.

<img src={diagram} alt="Modelo conceptual ApontaUA" />

- <StaticLink to="/ms3/diagrams/Modelo_Dominio.drawio" download>Abrir diagrama editável Draw.io</StaticLink>
- <StaticLink to="/ms3/diagrams/Modelo_Dominio.png" download>Descarregar PNG</StaticLink>
- <StaticLink to="/ms3/documents/Modelo_Dominio.docx" download>Documento DOCX</StaticLink>

Entidades consideradas: Utilizador, IdentidadeExterna, AtribuicaoPapel, Reputacao, Notificacao, Sugestao, Avaliacao, Comentario, Denuncia, Material, VersaoMaterial, Ficheiro, Topico, UnidadeCurricular e Curso. A identidade interna é permanente e independente do IdP.