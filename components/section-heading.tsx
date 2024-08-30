import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({children} :
SectionHeadingProps) {
  return (
    <h2 className = "text-3xl font-medium capitalize mb-8 text-center">{children}</h2>
  )
}

// So we use SectionHeadingProps because we want to pass children as a prop to the SectionHeading component (parent component).
// We use React.ReactNode to define the type of children prop. 
// React.ReactNode is a type that represents any valid React node.
// This is because typescript does not know what type of children will be passed to the SectionHeading component.
// TypeScript will throw an error if we don't define the type of children prop, because its a static type checker.

// So the goal of using children is so we don't hard code the text in the SectionHeading component.