import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoseSection from "@/components/RoseSection";
import RussianFlagDivider from "@/components/RussianFlagDivider";
import Promo from "@/components/Promo";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const roses = [
  {
    name: "Bellini",
    description: "Подари кусочек Италии 🧡",
    fullDescription: [
      "Bellini ( Беллини ) — подари кусочек Италии 🧡",
      "Белли́ни — алкогольный коктейль, изобретённый в Венеции в первой половине XX века; представляет собой смесь игристого вина (традиционно просекко) и персикового пюре, часто подаваемый на праздниках. Это — один из самых популярных коктейлей Италии. 🍹",
      "Сорт обладает потрясающе неповторимой окраской. Внутренняя часть лепестка окрашена в роскошный цвет шампанского, а с внешней стороны перетекает в нежный едва уловимый кремово-розоватый оттенок. Окрас бутона напоминает разрезанный персик. 🍑",
      "Бутоны не крупные, но за счёт чашевидной формы плотно заполняют всё пространство букета. Словно пузырьки шампанского в бокале. 🥂",
      "Роза обладает интересными ароматическими свойствами: насыщенный розовый аромат плавно переходит в мягкие фруктовые ноты. Этот аромат открывает для вас двери в вечерний семейный дворик, наполненный светом маленьких ламп с ярким персиковым ароматом в сопровождении игристого. 🇮🇹",
      "За счёт мягкого, нейтрального оттенка прекрасно сочетается со всеми сортами из нашей линейки.",
      "Прекрасно подойдёт в качестве подарка для любимой девушки 💕, так и в качестве подарка для коллег или бизнес-партнёров 🧛",
    ],
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/f80295f4-a61b-48ca-a6ee-5c664d90ec33.jpg",
    reverse: false,
    photos: [],
  },
  {
    name: "Novi",
    description: "Яркие оранжевые розы с насыщенным огненным тоном. Энергичные и страстные — для тех, кто хочет удивить.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/7a862757-1f7e-4e63-80f5-d21c621e1cca.jpg",
    reverse: false,
    photos: [],
  },
  {
    name: "Jumilia",
    description: "Нежно-розовые с коралловым акцентом. Романтичные и женственные — признание в любви в каждом лепестке.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/20a30ed6-b9f9-4e90-a614-cc148d26d971.jpg",
    reverse: true,
    photos: [],
  },
  {
    name: "Shangri-la",
    description: "Глубокие малиново-розовые розы с бархатистыми лепестками. Роскошь и страсть в каждом букете.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/97476612-5440-4e5a-89c9-ee494b456373.jpg",
    reverse: false,
    photos: [],
  },
  {
    name: "Revival",
    description: "Светло-розовые, воздушные и нежные. Символ нового начала — дарите при важных переменах в жизни.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/0c7f6a29-3b37-404c-94d0-f9c15bf12f87.jpg",
    reverse: true,
    photos: [],
  },
  {
    name: "Saida",
    description: "Нежно-персиковые розы с деликатным ароматом. Мягкие тона для особых моментов и тёплых слов.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/423b6dda-a6ce-4d38-a643-c4802bae76f2.jpg",
    reverse: false,
    photos: [],
  },
  {
    name: "Red Naomi",
    description: "Классические алые розы с бархатными лепестками. Символ страсти и глубокой любви — для самых важных признаний.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/b2454bd8-2778-483a-a002-de7f46e42a03.jpg",
    reverse: true,
    photos: [],
  },
  {
    name: "WOW",
    description: "«Вау!» — скажете вы, когда вам в подарок преподнесут изумительной красоты оранжево-лососевый букет. 🎉",
    fullDescription: [
      "Wow ( Вау ) 🎉",
      "«Вау!» — скажете вы, когда вам в подарок преподнесут изумительной красоты оранжево-лососевый букет. Главное, что вы не ошиблись с названием, сорт волшебной розы прописан, как Wow. Других слов и эмоциональных словосочетаний у её создателей просто не нашлось. Потрясающе — ВАУ! 🧡",
      "Её родиной стали Нидерланды, где в 2007 году сорт появился на свет. 🌱",
      "Роза Wow источает едва уловимый аромат, и дабы поймать его веяние, нужно приблизиться к нему. Сам аромат кроме основных нот розового запаха имеет нотки вербены, муската и лёгкие оттенки имбиря. Лист крупный, матовый, густо малахитовый. Крайне яркий лососево-оранжевый цвет гладких лепестков несомненно привлечёт всеобщее внимание. Бутоны долго сохраняют идеальную форму цветка, хорошо транспортируется, способна стоять в вазе до двух недель, сохраняя при этом свежий вид. 🌹",
    ],
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/03cbc508-12e2-4cc4-9cc6-64aaa17d645f.jpg",
    reverse: false,
    photos: [],
  },
  {
    name: "Avalanche",
    description: "Снежно-белые розы с кремовым оттенком. Чистота и элегантность — идеальный выбор для свадьбы и торжества.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/1485beaa-a32b-4338-8227-0b7b26b5accf.jpg",
    reverse: true,
    photos: [],
  },
  {
    name: "Heldll",
    description: "Нежно-розовые розы с пышными бутонами. Мягкие и воздушные — для тех, кто ценит трогательные жесты.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/f3e71ca6-fd81-441f-bd10-415aff72eecb.jpg",
    reverse: false,
    photos: [],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {roses.map((rose, i) => (
        <div key={rose.name}>
          <RussianFlagDivider />
          <RoseSection {...rose} />
        </div>
      ))}
      <RussianFlagDivider />
      <Promo />
      <RussianFlagDivider />
      <OrderForm />
      <Footer />
    </main>
  );
};

export default Index;