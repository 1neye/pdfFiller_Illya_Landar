

const useButtonColor = (color:string) => {
    let buttonColor;

    if (color === 'grey') {
        buttonColor = 'button_color_grey'
      } else if (color === 'orange') {
        buttonColor = 'button_color_orange'
      } else {
        buttonColor = ''
      }

    return buttonColor 
}

export default useButtonColor