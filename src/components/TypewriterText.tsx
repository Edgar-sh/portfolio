import { useState, useEffect } from 'react'

export interface TypewriterTextProps {
  phrases: string[]
}

export function TypewriterText({ phrases }: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    if (!phrases.length) return

    const currentPhrase = phrases[currentPhraseIndex % phrases.length]

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setTypingSpeed(500)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed, phrases])

  return (
    <div
      className="flex flex-col justify-center min-h-[32px] sm:min-h-[36px] text-[#838383] text-[18px] sm:text-[22px] lg:text-[24px] font-medium whitespace-nowrap select-none"
      data-name="Comments"
      aria-label="Animated roles"
    >
      <p className="leading-normal">
        {displayedText}
        <span className="inline-block animate-pulse text-[#838383] ml-0.5">|</span>
      </p>
    </div>
  )
}

export default TypewriterText
