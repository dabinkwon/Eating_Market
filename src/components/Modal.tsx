import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ isOpen, onConfirm, onCancel }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative w-[60vw] max-w-120 rounded-md bg-[rgb(214,197,186)] p-5 shadow-2xl">
        <h2 className="mb-2 text-2xl font-extrabold">확인</h2>
        <h4 className="mb-4 text-[16px]">정말 삭제하시겠습니까?</h4>
        <div className="flex justify-end gap-2">
          <Button text="아니오" onClick={onCancel} />
          <Button text="예" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
