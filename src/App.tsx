import { Button, Spinner } from "./components/ui";

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Spinner size="lg" />
    </div>
  );
}
