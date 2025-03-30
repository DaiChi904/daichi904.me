import Image from "next/image";

interface Props {
  width: number;
  height: number;
  fit?: boolean;
  circle?: boolean;
}

export default function MyIconImage({ width, height, fit, circle }: Props) {
  const applyFit = fit;
  const applyFullRounded = circle;
  const style = `${applyFit ? "size-fit" : ""} ${applyFullRounded ? "rounded-full" : ""}`;
  return <Image width={width} height={height} src="/others/myIcon.PNG" alt="This is my icon." className={style} />;
}
