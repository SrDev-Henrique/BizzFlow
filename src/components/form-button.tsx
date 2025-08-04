import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

const AnimatedP = ({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10, position: "absolute" }}
      animate={{
        opacity: 1,
        y: 0,
        position: "relative",
        transition: { delay },
      }}
      exit={{
        opacity: 0,
        y: -10,
        position: "absolute",
        transition: { position: { delay: 0.3 } },
      }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default function FormButton({
  isSent,
  error,
  isSending,
}: {
  isSent: boolean;
  error: boolean;
  isSending: boolean;
}) {
  return (
    <Button
      type="submit"
      className="relative w-fit cursor-pointer overflow-hidden transition-all duration-300"
    >
      {isSending ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex h-full w-full items-center justify-center"
        >
          <span className="border-background h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
        </motion.div>
      ) : (
        <AnimatePresence>
          {isSent ? (
            <AnimatedP
              text="Obrigado por se inscrever!"
              className="text-green-300"
            />
          ) : error ? (
            <AnimatedP
              text="Ocorreu um erro ao enviar o email. Por favor, tente novamente."
              className="text-destructive"
            />
          ) : (
            <AnimatedP text="Inscrever-se" key="default" delay={0.3} />
          )}
        </AnimatePresence>
      )}
    </Button>
  );
}
