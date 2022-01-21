import React, {createContext, CSSProperties, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MyContext, ThemeProvider, useTheme} from './ThemeProvider';




const App: React.FC = () => {

  return (
      <ThemeProvider>
          <Layout/>
      </ThemeProvider>
  );
}

const Layout: React.FC = () => (
    <MainView />
)

const MainView: React.FC = () => {
    const {theme, changeTheme} = useTheme()

    const onClickHandler = () => {
        if(changeTheme) {
            changeTheme(theme  === 'dark' ? 'light' : 'dark')
        }
    }

    return (
        <>
            <ItemList/>
            <button onClick={onClickHandler}>cambia</button>
        </>

    )
}

const ItemList: React.FC = () => (
    <ul>
      <li><Item/></li>
      <li><Item/></li>
      <li><Item/></li>
      <li><Item/></li>
      <li><Item/></li>
    </ul>
)

const Item: React.FC = () => {
  // const {theme} = useTheme();

  const style: (theme: string) => CSSProperties = (theme) => {
      return {
          backgroundColor: theme === 'dark' ? 'darkgray': 'azure',
          color: theme === 'dark' ? 'white': 'black',
      }
  }

  return (
      <MyContext.Consumer>
          {(value) => (
              <div style={style(value?.theme ?? '')}>pippo</div>
          )}
      </MyContext.Consumer>
  )
}

export default App;
