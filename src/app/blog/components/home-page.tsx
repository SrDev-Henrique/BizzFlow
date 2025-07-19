// app/blog/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "como-motivar-equipe",
    title: "Como motivar sua equipe usando tecnologia",
    badge: ["Gestão"],
    summary:
      "Descubra como plataformas modernas ajudam a engajar times e melhorar resultados.",
    date: "19 de julho de 2025",
    image: "/images/blog/post-2.webp",
    button: "Leia mais",
  },
  {
    slug: "desenvolver-lideres-melhores-para-melhor-desenvolver-talentos",
    title: "Desenvolver líderes melhores para melhor desenvolver talentos",
    badge: ["Gestão"],
    summary:
      "Empresas que investem em lideranças empáticas, adaptáveis e emocionalmente inteligentes saem na frente.",
    date: "19 de julho de 2025",
    image: "/images/blog/post-2.webp",
    button: "Leia mais",
  },
  {
    slug: "liderar-tambem-e-criar-o-que-a-maternidade-me-ensinou-sobre-gestao-de-equipes",
    title:
      "Liderar também é criar: o que a maternidade me ensinou sobre gestão de equipes",
    badge: ["Colunistas"],
    summary:
      "Como a experiência de ser mãe transformou minha forma de liderar, fortalecer vínculos e desenvolver talentos com empatia e autonomia.",
    date: "19 de julho de 2025",
    image: "/images/blog/post-2.webp",
    button: "Leia mais",
  },
  {
    slug: "ia-em-ritmo-desigual-nas-empresas-relatorio-alerta-que-falta-de-estrategia-pode-afastar-profissionais-e-frear-crescimento",
    title:
      "IA em ritmo desigual nas empresas: Falta de estratégia pode afastar profissionais",
    badge: ["Gestão", "Soluções para RH", "Tecnologia"],
    summary:
      "Thomson Reuters revela que apenas 22% das empresas possuem plano estruturado para adoção de IA, apesar dos benefícios comprovados. ",
    date: "19 de julho de 2025",
    image: "/images/blog/post-2.webp",
    button: "Leia mais",
  },
];

export default function HomePage() {
  return (
    <div className="w-full space-y-8 px-4">
      <h1 className="text-4xl font-bold">Blog da BizzFlow</h1>
      <p className="text-muted-foreground text-lg">
        Dicas, novidades e insights sobre gestão, RH e produtividade.
      </p>

      <Card className="cursor-pointer transition hover:shadow-md">
        <CardHeader>
          <Badge>Gestão</Badge>
          <CardTitle>
            <h2 className="text-xl font-semibold hover:underline">
              Trabalho híbrido em 2025: relatório global da Cisco revela o que
              realmente funciona - e o que não funciona
            </h2>
          </CardTitle>
          <CardDescription>
            <p>19 de julho de 2025 | 10 min de leitura</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Estudo com mais de 21 mil participantes mostra as tendências,
            preferências e desafios do trabalho híbrido no mundo e aponta
            caminhos estratégicos para líderes e RHs.
          </p>
          <div className="mt-4 h-full w-full">
            <Image
              src="/images/blog/post-1.webp"
              alt="Blog 1"
              width={2000}
              height={2000}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="cursor-pointer transition hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {post.badge.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
                <CardTitle>
                  <h2 className="text-xl font-semibold hover:underline">
                    {post.title}
                  </h2>
                </CardTitle>
                <CardDescription>
                  <p>{post.date}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.summary}</p>
                <div className="mt-4 h-full w-full">
                  <Image
                    src={post.image}
                    alt="Blog 1"
                    width={2000}
                    height={2000}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <Button className="mt-4 w-full cursor-pointer">
                  <p>{post.button}</p>
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
