# HTML5 e CSS

## 002

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântica (tags);

## Tags

- `<h1>` - Heading. É possível usar até o `h6` sendo que para browsers o recomendado é utilizar até o `h3` a menos que haja necessidade de mais, como no caso de um livro ou artigo. É usado para definir títulos.

- `<a>` - Link (anchor) - Usada para definir a navegação do usuário.

```
<a href="http://www.collabcode.training> Site da Collab Code </a>
```

- `<nav>` - Tag de navegação. Engloba todos os itens de um menu.

- `<header>` - Tag para indicação de header do site. Não confundir com `<head>` que é onde ficam as tags de config da página.

## CSS

É uma linguagem de estilos, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual;

### Outras anotações

#### Cores

- Sistema hexadecimal (composto por 6 dígitos) geram uma cor. Utiliza o sistema de cor RGB.

- Os valores vão de 0-9 e A-F, sendo o A com valor de 10.

```
color: #R1G2B3;
```

- O primeiro par (neste caso o `R1`) é referente ao vermelho.
- O segundo par (neste caso o `G2`) é referente ao verde.
- O terceiro par (neste caso o `B3`) é referente ao azul.

#### Um pixel não é um pixel

- Devido a diferença entre tamanhos/resoluções dos diferentes dispositivos (monitores/celulares/tablets), é importante entender que um pixel no monitor não é do mesmo tamanho que um pixel no celular, logo, no desenvolvimento é importante levar isso em consideração. Vamos pensar em um botão com a seguinte config:

```
btn{
    width:300px;
}
```

Com base nesse estilo, quando visto em um celular com uma viewport de 300px, o botão ocuparia 100% da largura da tela, enquanto visto em um monitor com 1080px, este botão ocuparia um tamanho mínimo do mesmo, logo ficaria muito pequeno e assim seria de difícil leitura.

#### Reset CSS

- Para projetos pequenos usar o do `Erick Meyer`. [Aqui!](https://meyerweb.com/eric/tools/css/reset/)

- Para projetos grandes usar o `Normalize`. [Aqui](https://necolas.github.io/normalize.css/)

## 003

### Float

```
float: left | right;
```

- Float muda o contexto da página, ou seja, ele para de estar na mesma "camada" para ir para uma "camada" a frente.

- A propriedade `float` não esconde conteúdo. O conteúdo que ficaria escondido com um elemento com a propriedade a sua frente se adapta para ser mostrado ao lado deste elemento.

- A largura/altura de um elemento com `float`, por padrão, é o conteúdo dele.
