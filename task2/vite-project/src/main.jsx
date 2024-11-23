import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Button message={"clicked"}/>
)
