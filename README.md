# Harley Aguilar — Portfólio

Site estático, sem build ou dependências externas. Inglês na raiz (`https://harley-aguilar.github.io/`) e português em `pt/`, incluindo os cases traduzidos. `en/index.html` e os caminhos antigos sob `Portfolio/` redirecionam para o endereço atual. O seletor PT/EN mantém a página e a seção. Experiência: 4+ anos.

## Publicação
Extraia o pacote e envie o conteúdo da pasta para a raiz do repositório. Não publique o arquivo ZIP. Para upload pelo navegador, envie `assets` em um lote e as demais pastas e arquivos em outro: o GitHub aceita até 100 arquivos por envio e 25 MiB por arquivo. Cada arquivo deste site fica abaixo de 2,5 MiB. Em Settings → Pages, publique a branch pela raiz (`/`).

## Imagens e desempenho
As imagens completas e as ampliações mantêm resolução, cores e pixels. A compressão WebP é sem perda; a equivalência dos pixels foi verificada. A geometria dos SVGs foi preservada, e somente suas imagens embutidas foram recomprimidas sem perda. Os vídeos originais permanecem idênticos.

As faixas animadas usam miniaturas específicas em `thumbs/`, dimensionadas para até 2× a altura máxima de exibição. `srcset` e `sizes` permitem que o navegador selecione a imagem completa quando a densidade da tela exigir. As galerias e os links de ampliação sempre usam a arte completa. Essas miniaturas adicionam arquivos ao pacote para reduzir os dados transferidos durante a navegação; o tamanho total do pacote permanece próximo ao anterior.

Imagens abaixo da primeira tela usam carregamento sob demanda. Vídeos não pré-carregam metadados e pausam ao sair da área visível. Reprodução automática respeita movimento reduzido, economia de dados e aba oculta; o botão de reprodução continua disponível.

## Manutenção
`assets/js/app.js` contém os controles em português e `assets/js/app.en.js`, em inglês. Mantenha ambos sincronizados ao alterar comportamentos. `assets/projects/en/` contém as artes inglesas. Os originais em português são preservados. A ficha de RPG em inglês tem imagem ampliável traduzida e um link identificado para a animação original em português.

## Social media
A home inclui uma seção com acesso ao case `projects/social-media.html`, também traduzido em `en/projects/social-media.html`. Cinco Shorts recentes têm reprodução incorporada carregada apenas após o clique e links para YouTube e TikTok. Um único player fica ativo por vez.

Os números públicos foram consultados em 06/10/2026 e estão documentados, com fontes e limitações, em `assets/data/social-media.json`. Contagens abreviadas são aproximadas. Não representam alcance único, retenção ou analytics privados. A atualização dos números é manual: altere o JSON e os textos nas duas homes e nos dois cases, mantendo a data da consulta. `assets/css/social-media.css` e `assets/js/social-media.js` cuidam da apresentação e reprodução.

As capas do case usam tipografia e formas vetoriais em HTML/CSS, com cinco variações. Os vídeos originais permanecem nos players e links. A seção de desempenho usa os 12 Shorts mais recentes, em sequência completa; os dados e cálculos de mediana e proporção estão no JSON. É uma consulta de visualizações acumuladas, não uma série temporal.

## Posicionamento, SEO e privacidade
A apresentação usa Performance Creative Designer, com foco em paid social, e-commerce e campanhas digitais. Experiências: MDE Marketing (aproximadamente 200 peças/mês, volume informado pelo profissional) e auxiliar de marketing na Dama Criativa em projetos de marcas do Grupo Heineken. Não atribuir CTR, CPA, ROAS ou conversões sem evidências.

Cada página principal e de projeto contém título, descrição, canonical, hreflang recíproco (en/pt-BR/x-default), Open Graph e Twitter Cards. A imagem de compartilhamento fica em `assets/images/social-preview.png`. `sitemap.xml` lista as páginas canônicas. A página inicial usa microdados Schema.org ProfilePage/Person. Se o domínio mudar, atualize as URLs absolutas em todas as páginas, sitemap e robots.txt.

O telefone/WhatsApp foi removido da versão atual. O histórico público do Git pode conter versões anteriores; a remoção do site não apaga esse histórico nem caches de terceiros.

O aviso de privacidade é informativo, não um consentimento para rastreamento. Apenas sua confirmação fica no localStorage, sem transmissão. A navegação não carrega analytics nem rastreadores publicitários. YouTube é opt-in por clique. Políticas completas em `privacy.html` e `pt/privacidade.html` explicam também os dados técnicos processados pelo provedor de hospedagem.

As páginas têm CSP via meta, restringindo scripts, frames, formulários, objetos, base URL e conexões. Links externos usam isolamento de opener e referrer; a política global de referrer é no-referrer. O GitHub Pages gerencia TLS/HTTPS e os cabeçalhos HTTP; CSP frame-ancestors e controles como Permissions-Policy exigiriam hospedagem com cabeçalhos configuráveis. Não confundir o aviso de privacidade com uma garantia absoluta de segurança.
