import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import RoseSection from "@/components/RoseSection";
import Promo from "@/components/Promo";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const roses = [
  {
    name: "Novi",
    description: "Яркие оранжевые розы с насыщенным огненным тоном. Энергичные и страстные — для тех, кто хочет удивить.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/7a862757-1f7e-4e63-80f5-d21c621e1cca.jpg",
    reverse: false,
  },
  {
    name: "Jumilia",
    description: "Нежно-розовые с коралловым акцентом. Романтичные и женственные — признание в любви в каждом лепестке.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/20a30ed6-b9f9-4e90-a614-cc148d26d971.jpg",
    reverse: true,
  },
  {
    name: "Shangri-la",
    description: "Глубокие малиново-розовые розы с бархатистыми лепестками. Роскошь и страсть в каждом букете.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/97476612-5440-4e5a-89c9-ee494b456373.jpg",
    reverse: false,
  },
  {
    name: "Revival",
    description: "Светло-розовые, воздушные и нежные. Символ нового начала — дарите при важных переменах в жизни.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/0c7f6a29-3b37-404c-94d0-f9c15bf12f87.jpg",
    reverse: true,
  },
  {
    name: "Saida",
    description: "Нежно-персиковые розы с деликатным ароматом. Мягкие тона для особых моментов и тёплых слов.",
    imageUrl: "https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/423b6dda-a6ce-4d38-a643-c4802bae76f2.jpg",
    reverse: false,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      {roses.map((rose) => (
        <RoseSection key={rose.name} {...rose} />
      ))}
      <Promo />
      <OrderForm />
      <Footer />
    </main>
  );
};

export default Index;
