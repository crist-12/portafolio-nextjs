import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta página no existe, regresa a {" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
