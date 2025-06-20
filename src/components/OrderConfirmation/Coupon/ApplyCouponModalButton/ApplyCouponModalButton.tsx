import * as Styled from "./ApplyCouponModalButton.style";

interface ApplyCouponModalButtonProps {
  onClick: () => void;
}

function ApplyCouponModalButton({ onClick }: ApplyCouponModalButtonProps) {
  return (
    <Styled.Button
      onClick={onClick}
      type="button"
      aria-label="쿠폰 적용 모달 열기"
    >
      쿠폰 적용
    </Styled.Button>
  );
}

export default ApplyCouponModalButton;
