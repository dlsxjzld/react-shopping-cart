import * as Styled from "./ApplyDiscountButton.style";

interface ApplyDiscountButtonProps {
  maxDiscountedPrice: number;
  handleUseCoupons: () => void;
}

function ApplyDiscountButton({
  maxDiscountedPrice,
  handleUseCoupons,
}: ApplyDiscountButtonProps) {
  return (
    <Styled.Button type="button" onClick={handleUseCoupons}>
      총 {maxDiscountedPrice.toLocaleString()}원 할인 쿠폰 사용하기
    </Styled.Button>
  );
}

export default ApplyDiscountButton;
