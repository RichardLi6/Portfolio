import React, {useRef} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>   // we can also write it like this: <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
// In this snippet, we are importing the projectsData array from the lib/data.ts file.
// We are using the SectionHeading component to display the heading for the projects section.
// We are mapping over the projectsData array and rendering a Project component for each project in the array.
// index is used as the key prop for the Project component that we are rendering becoming 0, 1, 2, 3, 4, 5, 6, 7 for each project.


// ... projects is a spread operator that allows us to pass all the properties of the project object as props to the Project component.
// we can also do it manually instead like this:   
// title={project.title}
//  description={project.description}
//  tags={project.tags}
// imageUrl={project.imageUrl}
// But using the spread operator is more concise and easier to read.

