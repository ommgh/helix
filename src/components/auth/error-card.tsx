import { Header } from "./header";
import { BackButton } from "./back-button";
import { Card, CardHeader, CardFooter } from "@/src/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card>
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
