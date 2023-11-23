import { Button } from "@/components/atoms/Button";
import { MarqueeRolagem } from "@/components/atoms/MarqueeRolagem";
import { CardDepo } from "@/components/molecules/CardDepo";
// import { mentores } from "@/mockups/mentores2";
import Link from "next/link";
import { ContainerBtn, ContainerDepo } from "./style";
import { api } from "@/services/axios";
import { useEffect, useState } from "react";

export interface ITestimony {
  id: string;
  userName: string;
  role: string;
  description: string;
}

export function DepoSection() {
  const [ testimonies, setTestimonies ] = useState<ITestimony[]>([]);
  const [ testimoniesErrors, setTestimoniesErrors ] = useState<string>("");

  const handleGetApiTestimonies = async () => {
    try {
    const response = await api.get("/testimony")

    setTestimonies(response.data)
    } catch (error: any) {
      setTestimoniesErrors(error.response)
    }
  }

  useEffect(() => {
    const handleLoadGetApiTestimonies = async () => {
        await handleGetApiTestimonies()
    }
    handleLoadGetApiTestimonies()
}, [])

  return (
    <ContainerDepo>
      <h2>Seja um mentor</h2>

      <MarqueeRolagem pauseOnHover={true} speed={30}>
        {testimonies.length > 0 && testimonies.map((testimony) => {
          return <CardDepo key={testimony.id} testimony={testimony} />;
        })}
        {!testimonies.length && testimoniesErrors && <b>{testimoniesErrors}</b>}
      </MarqueeRolagem>

      <ContainerBtn>
        <Link href={"/cadastro"}>
          <Button content={"Quero mentorar"} btnRole={"primary"} />
        </Link>
      </ContainerBtn>
    </ContainerDepo>
  );
}
