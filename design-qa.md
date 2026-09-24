# Design QA — seção de projetos

- Source visual truth path: `assets/proposta-projetos-1.png` (mesma composição da referência corrigida nesta iteração).
- Implementation URL: `http://127.0.0.1:4173/#projects`.
- Intended viewport/state: desktop, seção `#projects`, tema escuro, detalhes recolhidos.
- Source dimensions: 1487 × 1058 px; densidade não informada.
- Implementation screenshot path: indisponível.
- Implementation dimensions/CSS size/density: indisponíveis porque nenhum navegador integrado está disponível nesta sessão.

**Full-view comparison evidence**

- A referência foi aberta e inspecionada: um projeto principal horizontal em largura total e dois projetos compactos lado a lado abaixo.
- A implementação reproduz essa hierarquia dentro do container original de 1080 px do portfólio, migrando para uma coluna no celular.
- Não foi possível produzir a captura browser-rendered exigida para comparar visualmente a implementação com a referência.

**Focused region comparison evidence**

- Referência inspecionada: mídia, título, impacto, tecnologias e CTA de cada card.
- Implementação estática verificada: os três projetos mantêm mídia/estado protegido, título, impacto, tecnologias, ações e todo o conteúdo longo em disclosures.
- Comparação visual focada bloqueada pela indisponibilidade de navegador.

**Findings**

- [P2] Validação visual final indisponível.
  - Location: `#projects`.
  - Evidence: o servidor responde HTTP 200 e HTML, CSS e JavaScript passaram nas verificações estáticas, mas não há captura renderizada.
  - Impact: proporções finais, quebra tipográfica, reprodução do vídeo/embed e estados responsivos não podem ser declarados visualmente aprovados.
  - Fix: abrir a implementação em um navegador disponível, capturar o mesmo viewport e comparar com a referência.

**Required fidelity surfaces**

- Fonts and typography: preservadas as famílias Manrope e JetBrains Mono do portfólio; inspeção visual pendente.
- Spacing and layout rhythm: grade bento e breakpoints implementados; inspeção visual pendente.
- Colors and visual tokens: reutilizados os tokens de tema e o laranja existente; inspeção visual pendente.
- Image quality and asset fidelity: preservados o embed real, o vídeo real e o estado protegido do projeto corporativo; nenhuma mídia fictícia foi adicionada.
- Copy and content: os três projetos e seus textos, resultados, indicadores, competências, tecnologias e links foram preservados.

**Primary interactions tested**

- HTTP da página: aprovado (200).
- Sintaxe JavaScript: aprovada com `node --check`.
- Parsing HTML: aprovado.
- Interações no navegador, tema, disclosures, vídeo/embed e console: bloqueados porque não há navegador integrado disponível.

**Comparison history**

- Iteração 1: composição em destaque lateral ficou grande e destoante do sistema visual existente.
- Iteração 2: largura restaurada para 1080 px, tipografia devolvida à escala global do site e fundo decorativo removido.
- Iteração 3: composição temporária ajustada para um card principal à esquerda e dois cards empilhados à direita.
- Iteração 4: referência corrigida pelo usuário; composição final alterada para um card principal horizontal em largura total e dois cards compactos lado a lado, com descrições curtas limitadas a três linhas.
- Pós-refinamento: verificações estáticas aprovadas; evidência visual automatizada ainda indisponível.

**Implementation checklist**

- [x] Aplicar um card principal horizontal + dois cards secundários lado a lado.
- [x] Preservar conteúdo e mídias reais.
- [x] Manter detalhes extensos acessíveis sem sobrecarregar os cards.
- [x] Adicionar comportamento responsivo para desktop, tablet e celular.
- [ ] Capturar e comparar a implementação em navegador.

final result: blocked
