type buttonColor = 'orange' | 'grey'
type buttonSize = 'standart' | 'fullWidth'

interface buttonProps {
  color: buttonColor
  children: string
  disabled?: boolean
  size: buttonSize
}

const Button = ({ color, children, disabled, size }: buttonProps) => {

  let buttonColor;

  if (color === 'grey') {
    buttonColor = 'button_color_grey'
  } else if (color === 'orange') {
    buttonColor = 'button_color_orange'
  } else {
    buttonColor = ''
  }

  return (
    <button style={{ width: size === 'standart' ? '120px' : '100%' }} disabled={disabled} className={`button ${buttonColor}`}>{children}</button>
  )
}

export default Button