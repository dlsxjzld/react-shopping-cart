import { Modal } from "@sinjuk1/modal";

interface ApplyCouponModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

function ApplyCouponModal({
  isOpen,
  handleCloseModal,
  children,
}: ApplyCouponModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <Modal.Container
        position="center"
        size="small"
        containerStyle={{ maxHeight: "500px" }}
      >
        <Modal.CloseButton />
        {children}
      </Modal.Container>
    </Modal>
  );
}

export default ApplyCouponModal;
