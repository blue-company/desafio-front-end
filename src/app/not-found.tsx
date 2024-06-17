import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <div>
        <Image
          src="/404.svg"
          width={400}
          height={181}
          alt="imagem de página não encontrada"
        />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-3xl text-center">
          Essa página não existe
        </h2>
        <p className="text-center max-w-96 m-auto mt-2 mb-4">
          Infelizmente essa página não existe por gentiliza voltar para home ou
          ir para outra tela
        </p>
        <Button>
          <Link href="/" className="">
            Voltar para home
          </Link>
        </Button>
      </div>
    </div>
  );
}
