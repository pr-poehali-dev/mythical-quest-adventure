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
      "Лепестки окрашены в роскошный цвет шампанского, плавно переходящий в нежный кремово-розоватый оттенок — совсем как разрезанный персик. 🍑",
      "Бутоны чашевидной формы плотно заполняют букет, словно пузырьки просекко в бокале, а насыщенный розовый аромат мягко перетекает во фруктовые ноты. 🥂",
      "Нейтральный оттенок делает Беллини универсальным: подходит и для романтического подарка, и для делового букета. 🧡",
    ],
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/f80295f4-a61b-48ca-a6ee-5c664d90ec33.jpg",
    reverse: false,
    photos: [],
    budSize: "medium",
    budColor: "#F5C4A1",
    budColorName: "Персиково-кремовый",
  },
  {
    name: "Novi",
    description: "Яркие оранжевые розы с насыщенным огненным тоном. Энергичные и страстные — для тех, кто хочет удивить.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/7a862757-1f7e-4e63-80f5-d21c621e1cca.jpg",
    reverse: false,
    photos: [],
    budSize: "medium",
    budColor: "#F47B30",
    budColorName: "Огненно-оранжевый",
  },
  {
    name: "Jumilia",
    description: "Нежно-розовые с коралловым акцентом. Романтичные и женственные — признание в любви в каждом лепестке.",
    budSize: "large",
    fullDescription: [
      "Нежный переход из молочно-белого в яркий малиновый румянец на концах лепестков — изюминка, которую трудно спутать с любым другим сортом. 💝",
      "Крупные густомахровые бутоны классической бокаловидной формы выглядят торжественно и сочно, сразу притягивая взгляд. 🌹",
      "Джумилия — идеальный выбор для свадебного букета и романтического признания: символизирует крепкую любовь и не оставляет равнодушным никого. 💖",
    ],
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/20a30ed6-b9f9-4e90-a614-cc148d26d971.jpg",
    reverse: true,
    photos: [],
    budColor: "#ffffff",
    budColor2: "#F48FB1",
    budColorName: "Белый / Малиново-розовый",
  },
  {
    name: "Shangri-la",
    description: "Яркая, экспрессивная Шангри Ла с первого взгляда покоряет своим изумительным оттенком — название получила в честь вымышленной страны. Крупные бутоны густо-малинового цвета мгновенно переносят в фантастический мир красоты и изящества. Каждая композиция с Шангри Ла насыщена сочными красками и особенным, радостным настроением. 💘",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/97476612-5440-4e5a-89c9-ee494b456373.jpg",
    reverse: false,
    photos: [],
    budSize: "large",
    budColor: "#C2185B",
    budColorName: "Малиновый",
  },
  {
    name: "Revival",
    description: "Revival — в переводе «возрождение»: возрождение чувств и эмоций. 💕 Очаровательная роза при раскрытии открывает волшебную красоту нежно-розового оттенка с зелёной рубашечкой у основания лепестков — обилие лепестков создаёт визуальную иллюзию объёмности и воздушности. 🌹 После среза розы Revival радуют 10–12 дней, плавно распускаясь в округлую форму с пряным ароматом. 💖 Сорт очень влаголюбив — чаще меняйте воду и подрезайте стебли, чтобы цветы стояли дольше. 💧",
    budSize: "small",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/750c6e51-ed98-4e2b-9297-0387f9b8e56f.png",
    reverse: true,
    photos: [],
    budColor: "#F8BBD9",
    budColorName: "Светло-розовый",
  },
  {
    name: "Saida",
    description: "Нежно-персиковые розы с деликатным ароматом. Мягкие тона для особых моментов и тёплых слов.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/423b6dda-a6ce-4d38-a643-c4802bae76f2.jpg",
    reverse: false,
    photos: [],
    budSize: "medium",
    budColor: "#FFAB91",
    budColorName: "Персиковый",
  },
  {
    name: "Red Naomi",
    description: "Классические алые розы с бархатными лепестками. Символ страсти и глубокой любви — для самых важных признаний.",
    budSize: "large",
    fullDescription: [
      "Крупные бутоны тёмно-вишнёвого цвета с почти чёрными краями лепестков закручены в идеальную бокаловидную форму — роза, которую невозможно не заметить. ❤️",
      "Выведена в Голландии в 2006 году и названа в честь Наоми Кэмпбелл: такая же страстная и неповторимая, с нежным утончённым ароматом. 👑",
      "Идеальный выбор для самых важных моментов — свадеб, признаний и торжеств, когда слова уступают место красоте. 🌹",
    ],
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/a3291a04-af10-4148-92d0-8f0582169c5c.png",
    reverse: true,
    photos: [],
    budColor: "#8B1A1A",
    budColorName: "Тёмно-красный",
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
    budColor: "#FF7043",
    budColorName: "Лососево-оранжевый",
  },
  {
    name: "Avalanche",
    description: "Снежно-белые розы с кремовым оттенком. Чистота и элегантность — идеальный выбор для свадьбы и торжества.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/fbce43c0-906d-4c0c-905c-eafe6ba82778.png",
    reverse: true,
    photos: ["https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/47530b0d-5080-4f07-abed-b87e48959205.jpg"],
    budSize: "medium",
    budColor: "#F5F0E8",
    budColorName: "Кремово-белый",
  },
  {
    name: "Heldll",
    description: "Heidi — нежно-розовая роза с густомахровыми бутонами, каждый из которых раскрывается в идеальную чашевидную форму с более чем 40 лепестками. 🌸 Цветки обладают стойким сладким ароматом и долго сохраняют свежесть в вазе — до 10–14 дней. 💐 Пышная зелёная листва и прочные стебли делают Heidi безупречным выбором для нежных, трогательных букетов. 🤍",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/f3e71ca6-fd81-441f-bd10-415aff72eecb.jpg",
    reverse: false,
    photos: [],
    budSize: "medium",
    budColor: "#F48FB1",
    budColorName: "Нежно-розовый",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="catalog" className="flex flex-wrap justify-center gap-2 px-4 py-6" style={{ backgroundColor: "#faf7f4" }}>
        {roses.map((rose) => (
          <a
            key={rose.name}
            href={`#rose-${rose.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-4 py-2 rounded-full border border-rose-300 text-rose-700 text-sm font-medium hover:bg-rose-50 transition-colors whitespace-nowrap"
          >
            {rose.name}
          </a>
        ))}
      </div>
      {roses.map((rose, i) => (
        <div key={rose.name} id={`rose-${rose.name.toLowerCase().replace(/\s+/g, "-")}`}>
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