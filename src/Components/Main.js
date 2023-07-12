import PurpleTecnology from "../imagens/cartoon.png";
import MidlePurple from "./MidlePurple";
import ContainerEarly from "./ContainerEarly";
import ContainerCartoon from "./ContainerCartoon";
import StartUp from "./StartUp";
import BackToTopButton from "./BackToTopButton";

function Main() {
  return (
    <main id="corpo">      
        <ContainerEarly
          title={"Desenvolvedor Frontend :)"}
          paragraph={
            "Eu construo sistemas e designs codificando sempre da maneira mais limpa possível, simplesmente amo oque faço."
          }
        />     
      <ContainerCartoon img={PurpleTecnology} />
      <MidlePurple
        title="Olá, me chamo Gabriel, prazer em conhece-lo!"
        paragraph="Comecei a estudar programação no final de 2022, com facilidade em aprender e desejo em adquirir conhecimento, construi uma base sólida o
      suficiente para desenvolver sistemas de forma sutil, eficiente e limpa.
      Inclusive, apresento-lhe algumas das minhas habilidades através
      da construção e design desta página, meu portifólio!"
      />
      <StartUp />
    </main>
  );
}

export default Main;
