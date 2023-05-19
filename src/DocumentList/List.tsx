import Button from '../Button/Button'
import document from './document.svg'
import useListStyle from './useListStyle'

interface DocumentListProps {
  heading: string,
  edited: string,
}


const List = ({ heading, edited }: DocumentListProps) => {

  let listStyle = useListStyle()

  return (
    <li style={{ flexFlow: listStyle === 'desktop' ? 'row' : 'column', maxWidth: listStyle === 'desktop' ? '616px' : '320px', paddingBottom: listStyle === 'mobile' ? '20px' : undefined }} className='list__container'>
      <div className="list__content">
        <img src={document} alt="Document" />
        <div className="listText__container" style={{ maxWidth: listStyle === 'desktop' ? '375px' : '215px' }}>
          <h2>{heading}</h2>
          <span>{edited}</span>
        </div>
      </div>

      <div style={{ marginTop: listStyle === 'mobile' ? '21px' : '0px' }} className="list__button">
        <Button color={'orange'} size={listStyle === 'desktop' ? 'standart' : 'fullWidth'}>View document</Button>
      </div>
    </li>
  )
}

export default List