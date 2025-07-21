export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
};

export const allPosts: Post[] = [
    {
        slug: "trabalho-hibrido-em-2025-relatorio-global-da-cisco-revela-o-que-realmente-funciona-e-o-que-nao-funciona",
        title: "Trabalho híbrido em 2025: relatório global da Cisco revela o que realmente funciona e o que não funciona",
        excerpt: "Estudo com mais de 21 mil participantes mostra as tendências, preferências e desafios do trabalho híbrido no mundo e aponta caminhos estratégicos para líderes e RHs.",
        content: `<p>Estudo com mais de 21 mil participantes mostra as tendências, preferências e desafios do trabalho híbrido no mundo e aponta caminhos estratégicos para líderes e RHs.</p>`,
        date: "19 de julho de 2025",
    },
	{
		slug: "como-motivar-equipe",
		title: "Como motivar sua equipe usando tecnologia",
		excerpt:
			"Descubra como plataformas modernas ajudam a engajar times e melhorar resultados.",
		content: `<p>Descubra como plataformas modernas ajudam a engajar times e melhorar resultados.</p>`,
		date: "19 de julho de 2025",
	},
	{
		slug: "desenvolver-lideres-melhores-para-desenvolver-talentos",
		title: "Desenvolver líderes melhores para desenvolver talentos",
		excerpt:
			"Empresas que investem em lideranças empáticas, adaptáveis e emocionalmente inteligentes saem na frente.",
		content: `<p>Empresas que investem em lideranças empáticas, adaptáveis e emocionalmente inteligentes saem na frente.</p>`,
		date: "19 de julho de 2025",
	},
	{
		slug: "liderar-tambem-e-criar-o-que-a-maternidade-me-ensinou-sobre-gestao-de-equipes",
		title:
			"Liderar também é criar: o que a maternidade me ensinou sobre gestão de equipes",
		excerpt:
			"Como a experiência de ser mãe transformou minha forma de liderar, fortalecer vínculos e desenvolver talentos com empatia e autonomia.",
		content: `<p>Como a experiência de ser mãe transformou minha forma de liderar, fortalecer vínculos e desenvolver talentos com empatia e autonomia.</p>`,
		date: "19 de julho de 2025",
	},
	{
		slug: "ia-em-ritmo-desigual-nas-empresas-relatorio-alerta-que-falta-de-estrategia-pode-afastar-profissionais-e-frear-crescimento",
		title:
			"IA em ritmo desigual nas empresas: Falta de estratégia pode afastar profissionais",
		excerpt:
			"Thomson Reuters revela que apenas 22% das empresas possuem plano estruturado para adoção de IA, apesar dos benefícios comprovados.",
		content: `<p>Thomson Reuters revela que apenas 22% das empresas possuem plano estruturado para adoção de IA, apesar dos benefícios comprovados.</p>`,
		date: "19 de julho de 2025",
	},
];
