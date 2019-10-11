import React from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'
import { Button } from 'antd'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message')
        return
      case 'success':
        NotificationManager.success('Success message', 'Title here')
        return
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000)
        return
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback')
        })
        return

      default:
        NotificationManager.info('Info message')
        return
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='header-part'>
          <p className='title'>Notification Demo</p>
        </div>
        <div className='button-group'>
          <Button type='primary' onClick={() => this.createNotification('success')}>
            Success
          </Button>
          <Button onClick={() => this.createNotification('info')}>
            Info
          </Button>
          <Button type='dashed' onClick={() => this.createNotification('warning')}>
            Warning
          </Button>
          <Button type='danger' onClick={() => this.createNotification('error')}>
            Error
          </Button>
        </div>
        <NotificationContainer/>
      </div>
    )
  }
}

export default App
