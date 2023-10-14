import PurpleTecnology from "../imagens/cartoon.webp";
import MidlePurple from "./MidlePurple";
import ContainerEarly from "./ContainerEarly";
import ContainerCartoon from "./ContainerCartoon";
import StartUp from "./StartUp";

function Main() {
  return (
    <main id="corpo">      
        <ContainerEarly
          title={"Desenvolvedor Frontend :)"}
          paragraph={
            "Eu construo sistemas e designs codificando sempre da maneira mais limpa possível."
          }
        />     
      <ContainerCartoon img={PurpleTecnology} />
      <MidlePurple
        title="Olá, me chamo Gabriel, prazer em conhece-lo!"
        paragraph="Tenho extrema fácilidade em aprender e extremo desejo em adquirir conhecimento. Através de muito esforço e dedicação, construi uma base sólida o
      suficiente para desenvolver sistemas de forma sutil, eficiente e limpa.
      Inclusive, apresento-lhe algumas das minhas habilidades através
      da construção e design desta página, meu portifólio!"
      />
      <StartUp />
    </main>
  );
}

export default Main;
