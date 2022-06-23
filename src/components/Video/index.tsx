import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import { Button } from "../Button";
import { Card } from "../Card";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <section className="flex-1 ">
            <h1 className="text-2xl">Aula 01 - Abertura do Ignite Lab</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/araujooj.png"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Gabriel Araújo
                </strong>
                <span className="text-gray-200 text-sm block">
                  FullStack Developer at Premiersoft
                </span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <Button icon={DiscordLogo}>Comunidade do discord</Button>
            <Button colorScheme="secondary" icon={Lightning}>
              Acesse o desafio
            </Button>
          </section>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Card
            icon={FileArrowDown}
            title="Material Complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <Card
            icon={Image}
            title="Walpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>
    </div>
  );
}
