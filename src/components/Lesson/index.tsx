import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
  const { slug: lessonSlug } = useParams();

  const isLessonAvailable = isPast(availableAt);
  const formattedDate = format(
    availableAt,
    "EEEE' • 'd' de ' MMMM '•' k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === lessonSlug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{formattedDate}</span>
      <div
        className={classNames(
          "rounded border group-hover:border-green-500 transition-colors border-gray-500 p-4 mt-2",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm text-blue-500 font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            {type === "class" ? "AULA PRÁTICA" : "AO VIVO"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
