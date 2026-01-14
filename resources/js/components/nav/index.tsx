import { useLocation } from "preact-iso";

export default function () {
  const { path } = useLocation();

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return path === href;
    }

    return path === href;
  };

  return (
    <nav>
      <ul class="container">
        <li className={isActive("/") ? "active" : ""}>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="https://raptorframework.com/docs">Documentation</a>
        </li>

        <li>
          <a href="https://github.com/raptor-http">Github</a>
        </li>

        <li>
          <a href="https://jsr.io/@raptor/framework">JSR</a>
        </li>
      </ul>
    </nav>
  );
}
