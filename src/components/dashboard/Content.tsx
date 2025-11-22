import Cards from './statsSection/cards/Cards'
import structure from './statsSection/cards/structure'

export default function Content() {
  return (
    <div className="tw:md:flex tw:md:space-x-4 tw:space-y-4">
      {structure.map((structure, index) => (
        <Cards key={index} cardStructure={structure} />
      ))}
    </div>
  )
}
