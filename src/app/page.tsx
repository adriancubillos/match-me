import { Button } from "@nextui-org/react";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello Adri </h1>
      <Button color="danger" variant="bordered" startContent={<GoSmiley />}>Clcik me</Button>
    </div>
  );
}
