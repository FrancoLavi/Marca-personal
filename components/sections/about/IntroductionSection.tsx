import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroductionSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-24">
          <SectionHeading eyebrow={en ? "A little about me" : "Un poco sobre mí"} title={en ? "I believe good work is built on trust." : "Me importa que el trabajo se construya con confianza."} />
          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
            <p>{en ? "Three things I especially value when working with someone are trust, mutual respect, and kindness. I believe we can work seriously and pursue great results without losing the human side of the relationship." : "Hay tres cosas que valoro especialmente cuando trabajo con alguien: la confianza, el respeto mutuo y la amabilidad. Creo que se puede trabajar seriamente y buscar buenos resultados sin perder el buen trato entre las personas."}</p>
            <p>{en ? "I'm also persistent. When a problem appears that I don't know how to solve, my first reaction is to research, try alternatives, and truly understand what is happening. And when I need help, I have no problem asking for it and learning from others." : "También soy una persona perseverante. Cuando aparece un problema que no sé resolver, mi primera reacción es investigar, probar alternativas y tratar de entender realmente qué está pasando. Y cuando necesito ayuda, no tengo problema en pedirla y aprender de otras personas."}</p>
            <div className="border-l-2 border-accent pl-5 text-ink">
              <p>{en ? "What I enjoy most about development is not simply programming, but feeling that what I know can make something easier for another person." : "Una de las cosas que más disfruto del desarrollo no es simplemente programar, sino sentir que lo que sé puede facilitarle algo a otra persona."}</p>
              <p className="mt-4 text-muted">{en ? "To me, software creates value when it genuinely solves something for the person on the other side." : "Para mí, el valor del software aparece cuando del otro lado hay alguien a quien realmente le resuelve algo."}</p>
            </div>
            <p className="text-sm leading-7 text-muted">{en ? "Outside development, I enjoy video games, I like to compete, and I follow motorsports. They are simply other parts of who I am." : "Fuera del desarrollo también disfruto los videojuegos, me gusta competir y sigo con interés el automovilismo. Son simplemente otras partes de quién soy."}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
