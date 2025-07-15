import { ButtonLink } from '@georgakopoulos-soares-lab/shared-ui';

export default function HomeHero({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) {
  return (
    <div className="hero-image text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{tagline}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href="#" variant="filled">
              Our Research
            </ButtonLink>
            <ButtonLink href="#" variant="outline">
              Our Publications
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
