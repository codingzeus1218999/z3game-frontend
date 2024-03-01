import DetailCard from "@/components/detailCard";
import DetailDescription from "@/components/detailDescription";
import DetailReview from "@/components/detailReview";
import DetailTech from "@/components/detailTech";

const product = {
  images: [
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000057921/8a2cf8574961a349dc14f97c394d186ab1191b6e99682ddbe10fd4455c7197e1",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/8a2cf8574961a349dc14f97c394d186ab1191b6e99682ddbe10fd4455c7197e1",
    },
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/software/switch/70010000057921/a6552a335ff877735f0477c032ee01755645fc0503b59a87d257822fee8b3b22",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/a6552a335ff877735f0477c032ee01755645fc0503b59a87d257822fee8b3b22",
    },
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/software/switch/70010000057921/421631393b6fad28ef03c9332ea37da6e13019cf330750832c33fc95d6d6310b",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/421631393b6fad28ef03c9332ea37da6e13019cf330750832c33fc95d6d6310b",
    },
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/software/switch/70010000057921/149f009c0932c9715565a5696722a4daa60b425458e01f3615b535a6d23110e7",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/149f009c0932c9715565a5696722a4daa60b425458e01f3615b535a6d23110e7",
    },
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/software/switch/70010000057921/20fb363aaa5791c32ff9d1658b5d7305dcf76040dbaad69d3d15b926c37d9de3",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/20fb363aaa5791c32ff9d1658b5d7305dcf76040dbaad69d3d15b926c37d9de3",
    },
    {
      original:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/software/switch/70010000057921/9f1f4af921cb8c86b93ce8295e3e989d16892af3d619538d5dc0c8cafcbd6db8",
      thumbnail:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_100/ncom/software/switch/70010000057921/9f1f4af921cb8c86b93ce8295e3e989d16892af3d619538d5dc0c8cafcbd6db8",
    },
  ],
  cardInfo: {
    title: "Aliens: Dark Descent - Xbox Series X|S",
    type: "EM ESTOQUE",
    moneyUnit: "R$",
    price: "199,95",
    priceDescription: "R$ 199,95 ou até 6x s/ juros de R$ 33,32 no cartão",
    count: 5,
    description: "Aliens: Dark Descent - Xbox Series X|S e Xbox One",
    premium: [
      {
        title: "Constellation Edition",
        moneyUnit: "$",
        price: "339,94",
        description: "Only 1 left in stock - order soon",
      },
      {
        title: "Premium Edition",
        moneyUnit: "$",
        price: "339,94",
        description: "See available options",
      },
      {
        title: "Premium upgrade",
        moneyUnit: "$",
        price: "339,94",
        description: "See available options",
      },
    ],
  },
  description: `<h2>Jogue com as lendas do futebol</h2>
  <p>DISPON&Iacute;VEL PARA CONTAS BRASILEIRAS</p>
  <p>OS JOGADORES DEVEM TER MAIS DE 18 ANOS PARA PODER REALIZAR O RESGATE</p>
  <p>Sobre o EA Sports FC Mobile</p>
  <p>1. Dispon&iacute;vel para Android e IOS</p>
  <p>2. Classifica&ccedil;&atilde;o et&aacute;ria 4+</p>
  <p>3. Jogue em torneios globais conhecidos com sele&ccedil;&otilde;es nacionais qualificadas e n&atilde;o qualificadas.</p>
  <p>4. Treine os her&oacute;is do futebol - Treine seus jogadores favoritos, aumentando suas estat&iacute;sticas e levando-os para o pr&oacute;ximo n&iacute;vel!</p>
  <p>5. Jogo r&aacute;pido, gols emocionantes - Marque gols com os melhores jogadores do mundo usando modos criativos.</p>
  <p>6. Crie jogadas com passes precisos - Domine a posse de bola com novas formas de passar, abra espa&ccedil;o e crie oportunidades de ataque.</p>
  <p>Termos e Condi&ccedil;&otilde;es</p>
  <p>
  &bull; Voc&ecirc; precisa ter 18 anos ou mais para resgatar seu c&oacute;digo.<br/>&bull; Localize qual &eacute; o ID de seu usu&aacute;rio acessando o seu perfil no jogo e em seguida clicando em galeria, copie seu UID com o bot&atilde;o ao lado do n&uacute;mero ou anote;<br/>&bull; Em seguida acesse o link "Acessar Conte&uacute;do" desta mensagem que enviamos, ap&oacute;s acessar a p&aacute;gina com os dados de seu pedido, veja em "Acesso&nbsp;Conte&uacute;do" , clique no item comprado e em seguida na op&ccedil;&atilde;o "Resgatar Recarga";<br/>&bull; Informe o seu ID na tela seguinte e aguarde o cr&eacute;dito direto no jogo.
  </p>
  <p>4. Os EA Sports FC Points Codes t&ecirc;m validade de 1 (um) ano a partir da data da compra.</p>
  <p>Como resgatar EA Sports FC Points de EA Sports FC Mobile?</p>
  <p>1. Fa&ccedil;a login ou registre-se na meplay usando seu EA Sports FC Mobile Player ID.</p>
  <p>2. V&aacute; para a p&aacute;gina "Resgatar c&oacute;digo" e digite o c&oacute;digo da sua compra de EA Sports FC Mobile Points.</p>
  <p>3. Resgate o valor do cart&atilde;o e os EA Sports FC Points ser&atilde;o adicionados instantaneamente ao seu perfil no jogo.</p>
  <p>Observa&ccedil;&atilde;o: os C&oacute;digos EA Sports FC Points t&ecirc;m validade de 1 ano a partir da data da compra.</p>
  <p>Confira a classifica&ccedil;&atilde;o indicativa no App</p>`,
  techDetails: {
    languages: [
      { lang: "English", interface: true, fullAudio: true, subtitles: true },
      { lang: "Português", interface: true, fullAudio: false, subtitles: true },
      { lang: "Español", interface: true, fullAudio: true, subtitles: false },
    ],
    classification: {
      title: "classificacao indicativa: 14 anos",
      number: 14,
      subtitle1: "violencia",
      subtitle2: "medo",
      description: "Rating for: Coordenacao de classificacao Indicativa",
    },
    details: [
      { label: "title", value: "Poppy Playtime" },
      { label: "genre", value: "Action, Adventure, Indie" },
      { label: "developer", value: "Mob Entertainment" },
      { label: "publisher", value: "Mob Entertainment" },
      { label: "release date", value: "12 Oct, 2021" },
    ],
    requirements: {
      minimum: [
        { label: "OS", value: "Windows 10" },
        { label: "Processor", value: "Intel Core i5" },
        { label: "Memory", value: "8GB RAM" },
        { label: "Graphics", value: "Nvidia GeForce GTX 1060 / Radeon RX 580" },
      ],
      recommended: [
        { label: "OS", value: "Windows 10" },
        { label: "Processor", value: "Intel Core i5" },
        { label: "Memory", value: "8GB RAM" },
        { label: "Graphics", value: "Nvidia GeForce GTX 1060 / Radeon RX 580" },
      ],
    },
  },
  reviewDetails: {
    score: 3.7,
    rating: 188,
    stars: [
      { count: 134, pro: 23.4 },
      { count: 29, pro: 50.4 },
      { count: 9, pro: 10.4 },
      { count: 3, pro: 5 },
      { count: 13, pro: 10 },
    ],
    pro: 26.0,
    reviews: [
      {
        score: 2.7,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
      {
        score: 1.2,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
      {
        score: 3.6,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
      {
        score: 5,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
      {
        score: 4.6,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
      {
        score: 2.7,
        title: "Exploration and action",
        user: "Austint3373",
        time: "2 months ago",
        content:
          "You cannot change the circumstances but you can change yourself. That is something you have charge of. You cannot change the circumstances but you can change yourself. That is something you have charge of...",
        yes: 7,
        no: 2,
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="al-container">
      <div className="mt-5">
        <DetailCard images={product.images} cardInfo={product.cardInfo} />
      </div>
      <div className="mt-14">
        <DetailDescription description={product.description} />
      </div>
      <div className="mt-14">
        <DetailTech info={product.techDetails} />
      </div>
      <div className="my-14">
        <DetailReview info={product.reviewDetails} />
      </div>
    </div>
  );
}
