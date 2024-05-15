import { useState } from 'react'
import axios from 'axios'

import { TextField, Button, Container, Stack, FormControlLabel, Checkbox } from '@mui/material'
import { MuiTelInput, matchIsValidTel  } from 'mui-tel-input'
import { Link } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Form = () => {
  const [ phone, setPhone ] = useState('')
  const [ phoneErr, setPhoneErr ] = useState('')
  const [policy, setPolicy] = useState(false)

  function validatePhone(value) {
    setPhone(value)
    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)) {
      setPhoneErr(null)
    } else setPhoneErr('Некорректно введен номер')
  }

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const token = '6442525175:AAHU0zoXhUgugZLZYJ4kHBl3InXKT5KH-Kw'
    const chat_id = '-1001575662038'
    const dataSubmit = `<b>Полное имя: </b>${name}%0A<b>Телефон: </b>${phone}%0A<b>Email: </b>${email}%0A<b>Тема: </b>${message}`
    axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${dataSubmit}`)
    .then(response => {
      // setIsShow(false)
      // TODO Обработать успешную отправку и не успешную
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  const theme = createTheme({
    palette: {
      primary: { main: "#EC901C" }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
          <TextField
            type="text"
            variant='outlined'
            color='primary'
            label="Имя"
            onChange={e => setName(e.target.value)}
            value={name}
            fullWidth
            required
            sx={{marginBottom: 2}}
          />
          <MuiTelInput
            defaultCountry="RU"
            forceCallingCode
            required
            fullWidth
            onlyCountries={['RU', 'BY', 'KZ']}
            value={phone}
            sx={{mb: 2}}
            onChange={number => validatePhone(number)}/>
          <TextField
            type="email"
            variant='outlined'
            color='primary'
            label="Email"
            sx={{mb: 2}}
            onChange={e => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
          />
          <TextField
            label="Тема"
            onChange={e => setMessage(e.target.value)}
            value={message}
            multiline
            fullWidth
            maxRows={4}
          />
        <Stack direction="row" sx={{mb: 2}}>
          <FormControlLabel required control={<Checkbox checked={policy} onChange={e => setPolicy(e.target.checked)} />} label="Я согласен(а) на обработку персональных данных" />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          type="submit">
          Оставить заявку
        </Button>
      </form>
    </ThemeProvider>
  )
}


export default Form