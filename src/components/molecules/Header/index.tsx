import logoImg from "@/assets/logos/sou-junior.svg";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import { ContainerHeader, GroupBtn } from "./style";
import { useEffect, useState } from "react";

export function Header() {

  // const [ userType, setUserType ] = useState("user")

  return (
    <ContainerHeader>
      <div>
        <Link href="/">
          <Image src={logoImg} alt="Logo Sou Júnior" />
        </Link>
        <span />
        <a href="#onboarding">Como Funciona</a>
        <a href="#mentor">Encontre Seu Mentor</a>
      </div>
      <GroupBtn>
        <Link href={"/cadastro"}>
          <Button content="Quero Mentorar" btnRole={"primary"} />
        </Link>
        <Link href={ {pathname: "/login", query: { userType: "mentor" }} }>
          <Button content="Login para Mentores" btnRole={"secondary"} />
        </Link>
      </GroupBtn>
    </ContainerHeader>
  );
}
