'use client';
import Input  from "../atoms/Input";
import { Button } from "../atoms/Button";

export const SubscriptionForm = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Apúntate a la lista y aprovecha de la oferta de lanzamiento</h2>
        <Input placeholder="email" />
        <Button text="Apúntate" onClick={() => console.log("Subscribed")} />
      </div>
    </div>
  );
};
