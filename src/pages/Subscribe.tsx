import { Logo } from "../components/Logo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../components/Button";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSubcriber_CreationMutation } from "../graphql/generated";

interface FormData {
  name: string;
  email: string;
}

const subscribeSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

export function Subscribe() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(subscribeSchema),
  });

  const [createSubscriber, { data, loading }] = useSubcriber_CreationMutation();

  const handleSubscribe = async (data: FormData) => {
    await createSubscriber({
      variables: data,
    });

    navigate("/event/lesson/aula-01");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <section className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com
            <strong className="text-blue-500"> React </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </section>
        <section className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubmit(handleSubscribe)}
            className="flex flex-col gap-2 w-full"
          >
            <input
              {...register("name")}
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu nome completo"
            />
            <input
              {...register("email")}
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Digite seu email"
            />
            <Button
              disabled={loading}
              className="mt-10 disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </Button>
          </form>
        </section>
      </div>
      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
