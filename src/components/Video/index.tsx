import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { LinkButton } from "../LinkButton";
import { Card } from "../Card";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface VideoProps {
  slug: string;
}

export function Video({ slug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <section className="flex-1 ">
            <h1 className="text-2xl">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </section>
          <section className="flex flex-col gap-4">
            <LinkButton icon={DiscordLogo}>Comunidade do discord</LinkButton>
            <LinkButton colorScheme="secondary" icon={Lightning}>
              Acesse o desafio
            </LinkButton>
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
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>
    </div>
  );
}
