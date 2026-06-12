import { Button } from "./Button"

import rightSvg from "../assets/right.svg"
import leftSvg from "../assets/left.svg"

type Props = {
  current: number
  total: number
  onNext: () => void
  onPrevious: () => void
}

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Button variant="small" onClick={onPrevious}>
        <img src={leftSvg} alt="left-icon" />
      </Button>

      <span className="text-gray-200 text-sm">
        {current} / {total}
      </span>

      <Button variant="small" onClick={onNext}>
        <img src={rightSvg} alt="right-icon" />
      </Button>
    </div>
  )
}
