import { useState } from 'react'
import axios from 'axios'

import { TextField, Button, Container, Stack, FormControlLabel, Checkbox } from '@mui/material'
import { MuiTelInput, matchIsValidTel  } from 'mui-tel-input'
import { Link } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Form = () => {
  const [ phone, setPhone ] = useState('')
  const [ phoneErr, setPhoneErr ] = useState('')
  const [ policy, setPolicy ] = useState(false)
  const [ status, setStatus ] = useState(null)
  const [ disabledForm, setDisabledForm ] = useState(false)

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
    const text = `📩 Вам новая заявка:\n<b>Полное имя: </b>${name}\n<b>Телефон: </b>${phone}\n<b>Email: </b>${email}\n<b>Тема: </b>${message}`
    const params = JSON.stringify({ 'chat_id': chat_id, 'parse_mode': 'html', 'text': text })
    setDisabledForm(true)
    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, params, { headers: { 'Content-Type': 'application/json' }} )
    .then(response => {
      setStatus('success')
      clearStatus()
    }).catch(err => {
      setStatus('error')
      clearStatus()
    }).finally(() => {
      setDisabledForm(false)
    })
  }

  const theme = createTheme({
    palette: {
      primary: { main: "#EC901C" }
    }
  })

  function clearStatus () {
    setTimeout(() => { setStatus(null) }, 10000)
  }
   const renderForm = () => {
    if (status === null) {
      return (
        <form onSubmit={ handleSubmit }>
            <TextField
              type="text"
              variant='outlined'
              color='primary'
              label="Имя"
              onChange={e => setName(e.target.value)}
              value={name}
              disabled={ disabledForm }
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
              disabled={ disabledForm }
              onChange={number => validatePhone(number)}/>
            <TextField
              type="email"
              variant='outlined'
              color='primary'
              label="Email"
              sx={{mb: 2}}
              onChange={e => setEmail(e.target.value)}
              value={email}
              disabled={ disabledForm }
              fullWidth
              required
            />
            <TextField
              label="Тема"
              onChange={e => setMessage(e.target.value)}
              value={message}
              disabled={ disabledForm }
              multiline
              fullWidth
              maxRows={4}
            />
          <Stack direction="row" sx={{mb: 2}}>
            <FormControlLabel
              required
              disabled={ disabledForm }
              control={<Checkbox checked={policy} onChange={e => setPolicy(e.target.checked)}/> }
              label="Я согласен(а) на обработку персональных данных" />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            disabled={ disabledForm }
            type="submit">
            Оставить заявку
          </Button>
        </form>
      )
    } else if (status === 'success') {
      return (
        <div className='status'>
          <svg width="512" height="512" x="0" y="0" viewBox="0 0 512 512">
            <path d="M402.37 186.7 263.78 325.3l-7.78 7.78-41.72 41.71-49.5-49.49-55.15-55.16 49.5-49.5 55.15 55.16L256 234.08l96.87-96.87z" fill="#77cc00"></path>
            <path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm0 494.07c-131.27 0-238.07-106.8-238.07-238.07S124.73 17.93 256 17.93 494.07 124.73 494.07 256 387.27 494.07 256 494.07z" fill="#77cc00"></path>
          </svg>
          <p>Ваша заявка отправлена!<br />Мы свяжемся с вами в ближайшее время.</p>
        </div>
      )
    } else if (status === 'error') {
      return (
        <div className='status'>
          <svg width="512" height="512" viewBox="0 0 512 512">
            <path d="M256 0C114.779 0 0 114.779 0 256C0 397.221 114.779 512 256 512C397.221 512 512 397.221 512 256C512 114.779 397.221 0 256 0ZM256 486.16C129.202 486.16 25.8404 382.798 25.8404 256C25.8404 129.202 129.202 25.8404 256 25.8404C382.798 25.8404 486.16 129.202 486.16 256C486.16 382.798 382.798 486.16 256 486.16Z" fill="#F57D7D"/>
            <path d="M274.029 254.798L349.147 179.681C353.954 174.873 353.954 166.46 349.147 161.653C344.339 156.845 335.926 156.845 331.119 161.653L256.001 236.77L180.884 161.653C176.076 156.845 167.663 156.845 162.856 161.653C158.048 166.46 158.048 174.873 162.856 179.681L237.973 254.798L162.856 329.314C158.048 334.122 158.048 342.535 162.856 347.343C165.259 349.746 168.865 350.948 171.87 350.948C174.874 350.948 178.48 349.746 180.884 347.343L256.001 272.225L331.119 347.343C333.522 349.746 337.128 350.948 340.133 350.948C343.137 350.948 346.743 349.746 349.147 347.343C353.954 342.535 353.954 334.122 349.147 329.314L274.029 254.798Z" fill="#F57D7D"/>
            <clipPath id="clip0_2300_416">
              <rect width="512" height="512" fill="white"/>
            </clipPath>
          </svg>
          <p>Произошла ошибка.<br />Мы уже работаем над устранением.</p>
        </div>
      )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      { renderForm() }
    </ThemeProvider>
  )
}


export default Form