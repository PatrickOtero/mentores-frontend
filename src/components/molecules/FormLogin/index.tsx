import CardLoading from "@/assets/loading.gif";
import souJuniorLogoImg from "@/assets/logos/sou-junior.svg";
import { Button } from "@/components/atoms/Button";
import { InputLogin } from "@/components/atoms/InputLogin";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "../../atoms/Checkbox";
import { ContainerForm } from "./style";
import userLoginService from "@/services/userLoginService";
import { useRouter } from "next/router";


export function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ type, setType ] = useState("")
  const [keepConnected, setKeepConnected] = useState(false);
  const [disable, setDisable] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);

  const { sendLogin, formState, countError } = userLoginService();

  const router = useRouter()

  const { userType } = router.query;

  console.log(userType)

  const notify = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      toastId: "customId",
    });
  };
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userType)
    setLoading(true);

    if (typeof userType == "string") {
      await sendLogin({ email, password, type }, userType);
    }
      
      setTimeout(() => {
        setLoading(false);
      }, 500); 
  };


  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countError]);

  function checkFields() {
    return email.trim() !== "" && password.trim() !== "";
  }

  useEffect(() => {
    setSubmitButton(!checkFields());
  }, [email, password]);

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        style={{
          textAlign: "justify",
          fontSize: "16px",
          width: "550px",
          lineHeight: "32px",
        }}
      />
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <Image
            src={souJuniorLogoImg}
            alt="Logo SouJunior"
            width={264}
            height={40}
          />

          <h2>Bem-vindo de volta</h2>

          <InputLogin
            error={formState.errors}
            key={"email"}
            type="email"
            value={email}
            setValue={setEmail}
            placeholder=""
            label="E-mail"
            id="emailID"
          />
          <div style={{ position: "relative" }}>
            <InputLogin
              error={formState.errors}
              key={"pass"}
              type="password"
              value={password}
              setValue={setPassword}
              placeholder=""
              label="Senha"
              id="passID"
            />
            {!disable && <span>{formState.errors}</span>}
          </div>
          {disable && (
            <span>
              Seu acesso a conta continua bloqueado, pois você não redefiniu sua
              senha após as cinco tentativas de acesso incorretas. Por favor,
              clique em &lsquo;Esqueci minha senha&rsquo; para realizar a
              recuperação
            </span>
          )}

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Checkbox
              isChecked={keepConnected}
              setValue={setKeepConnected}
              id="connected"
              text="Me manter conectado"
            />
            <a href="#" style={{ textDecoration: "underline" }}>
              Esqueci a senha
            </a>
          </div>

          <Button
            disabled={submitButton}
            btnRole={"form"}
            content={
              loading ? (
                <Image alt="loading" src={CardLoading} width={24} height={24} />
              ) : (
                "Entrar"
              )
            }
          />

          <p>
            Ainda não possui cadastro?{" "}
            <Link href="/cadastro">Cique aqui e cadastre-se</Link>
          </p>
        </form>
      </ContainerForm>
    </>
  );
}
