import { cn } from "@/lib/cn";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  children,
  className,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}
