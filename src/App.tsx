import { Modal } from "./components/ui";

export default function App() {
  return (
    <Modal
      onClose={() => console.log("Close")}
      isOpen={true}
      title="Modal Title"
    >
      Hello From isnide modal
    </Modal>
  );
}
