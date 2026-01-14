import MainLayout from "../layouts/main.tsx";

interface Props {
  default?: boolean;
}

export default function NotFound(_props: Props) {
  return (
    <MainLayout>
      <div className="container">
        <h1>404 - Not Found</h1>
      </div>
    </MainLayout>
  );
}
