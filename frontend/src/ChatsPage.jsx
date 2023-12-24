import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return <div style ={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='0742e06c-d1ac-4534-b543-55f133303235'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
}

export default ChatsPage;