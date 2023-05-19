import Button from './Button/Button'
import './index.scss'
import List from './DocumentList/List'
import ListContainer from './DocumentList/ListContainer'



const App = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '0 10px' }}>
      <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <h1 style={{ whiteSpace: 'nowrap' }}>Buttons</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}>
            <Button size={'standart'} color={'grey'}>Normal</Button>
            <Button disabled size={'standart'} color={'grey'}>Disabled</Button>
          </div>
          <div style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}>
            <Button size={'standart'} color={'orange'}>Normal</Button>
            <Button disabled size={'standart'} color={'orange'}>Disabled</Button>
          </div>

        </div>

        <h1 style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Document List</h1>
        <ListContainer>
          <List heading={'Rundofase'} edited={'Last Edited: 08/08/2020'} />
          <List heading={'Genco Pura Olive Oil Company'} edited={'Last Edited: 08/08/2020'} />
          <List heading={'Bubba Gump'} edited={'Last Edited: 08/08/2020'} />
          <List heading={'Lorem Ipsum is simplythe industry\'s dummy text of the printing and typesetting'} edited={'Last Edited: 08/08/2020'} />
        </ListContainer>



      </div>
    </div>

  )
}

export default App