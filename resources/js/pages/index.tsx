import MainLayout from "../layouts/main.tsx";

interface Props {
  default?: boolean;
}

export default function (_props: Props) {
  return (
    <MainLayout>
      <div className="container">
        <div className="banner">
          <div className="title">
            <img src="/images/logo.svg" />
            
            <h1>Raptor Framework</h1>
          </div>

          <p className="subtitle">
            A lightweight middleware framework for Deno, Bun & Node.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
