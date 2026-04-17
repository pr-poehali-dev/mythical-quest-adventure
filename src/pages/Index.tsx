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
    description: "Нежно-жёлтые розы с медовым оттенком. Тёплые, солнечные и жизнерадостные — идеальный подарок для тех, кто ценит уют.",
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
];

const Index = () => {
  const branchUrl = "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/files/d2ced0c4-28cc-413c-8e83-29dce601e090.jpg";

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Обёртка с декоративными ветками по бокам */}
      <div className="relative">
        {/* Ветка слева */}
        <div className="pointer-events-none select-none absolute left-0 top-0 bottom-0 w-32 z-10 overflow-hidden">
          <img
            src={branchUrl}
            alt=""
            className="absolute left-[-20px] top-0 w-36 h-full object-cover"
            style={{ opacity: 0.13, mixBlendMode: "multiply", maskImage: "linear-gradient(to right, black 60%, transparent)" }}
          />
        </div>
        {/* Ветка справа (зеркально) */}
        <div className="pointer-events-none select-none absolute right-0 top-0 bottom-0 w-32 z-10 overflow-hidden">
          <img
            src={branchUrl}
            alt=""
            className="absolute right-[-20px] top-0 w-36 h-full object-cover scale-x-[-1]"
            style={{ opacity: 0.13, mixBlendMode: "multiply", maskImage: "linear-gradient(to left, black 60%, transparent)" }}
          />
        </div>

        {roses.map((rose, i) => (
          <>
            <RussianFlagDivider key={`div-${i}`} />
            <RoseSection key={rose.name} {...rose} />
          </>
        ))}
        <RussianFlagDivider />
        <Promo />
        <RussianFlagDivider />
        <OrderForm />
      </div>

      <Footer />
    </main>
  );
};

export default Index;