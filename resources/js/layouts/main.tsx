import { ComponentChildren } from "preact";
import Nav from "../components/nav/index.tsx";
import Footer from "../components/footer/index.tsx";

type Props = {
  children: ComponentChildren
};

export default function (props: Props) {
  const { children } = props;

  return (
    <>
      <Nav />

      <main className="home">
        {children}
      </main>

      <Footer />
    </>
  );
}
