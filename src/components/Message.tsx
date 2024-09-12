import { RiErrorWarningLine } from '@remixicon/react'

interface IProps {
  msg: string
}

const Message: React.FC<IProps> = ({ msg }) => {
  return (
    <div className='msg'>
      <RiErrorWarningLine /> {msg}
    </div>
  )
}

export default Message
