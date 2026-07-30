import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button.jsx";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Chiptek</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>
      <section className="flex min-h-[70vh] items-center bg-white pt-24">
        <div className="container-content text-center">
          <p className="text-sm font-semibold tracking-widest text-teal">404</p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink-text">
            This page doesn't exist.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-body">
            The page you're looking for may have moved or no longer exists. You can return to the homepage or
            browse Chiptek's services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/#services" variant="secondary" withArrow={false}>
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
