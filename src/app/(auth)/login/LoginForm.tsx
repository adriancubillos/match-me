"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { useForm, SubmitHandler } from "react-hook-form"


export default function LoginForm() {
  const { register, handleSubmit, formState: { isValid, errors } } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form submitted", data);
  };
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">
              Login
            </h1>
          </div>
          <p className="text-neutral-500">
            Welcome back to MatchMe!
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("Email", { required: 'Email is required' })}
              isInvalid={!!errors.Email} //!! is the double negation operator. It's used to convert a value to a boolean.
              errorMessage={errors.Email?.message as string}
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register("Password", {
                required: 'Password is required',
                minLength: { value: 8, message: "password must be at least 8 characters long" }
              })}
              isInvalid={!!errors.Password}
              errorMessage={errors.Password?.message as string}

            />
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid}
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}