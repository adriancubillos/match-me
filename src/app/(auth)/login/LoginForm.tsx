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


export default function LoginForm() {


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
        <form >
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"

            />
            <Button
              fullWidth
              color="default"
              type="submit"

            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}