"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Dialog from "./Dialog";
import Input from "@components/input/Input";
import Button from "@components/buttons/Button";
import useLoginModal from "@hooks/useLoginModal";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});

export type Schema = z.infer<typeof schema>;

const Modal: React.FC = () => {
  const login = useLoginModal();
  const { ...methods } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  const bodyContent = (
    <div className="flex flex-col items-center gap-y-6 p-8">
      <h4>
        Sign in to{" "}
        <span className="font-bold text-secondary-500">
          <span className="text-primary-500">Coin</span>Synch
        </span>
      </h4>
      <FormProvider {...methods}>
        <Input placeholder="Email" name="email" type="email" />

        <Button title="Sign in" onClick={methods.handleSubmit(onSubmit)} />
      </FormProvider>
    </div>
  );

  return (
    <Dialog
      open={login.isOpen}
      onClose={login.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default Modal;
