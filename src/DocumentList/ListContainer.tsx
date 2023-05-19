interface ListContainerProps {
  children: JSX.Element | JSX.Element[];
}

const ListContainer = ({ children }: ListContainerProps) => {
  return (
    <ul className={'list__wrapper'}>
      {children}
    </ul>
  )
}

export default ListContainer