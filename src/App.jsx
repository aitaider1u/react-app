import UserGreeting from './UserGreeting.jsx'

function App() {
    return (
        <>
            <UserGreeting 
                username="BroCode" 
                isLoggedIn={true} >
            </UserGreeting>
            
            <UserGreeting/>
        </>
    )
}

/**
<UserGreeting 
    username="BroCode" 
    isLoggedIn={true} >
</UserGreeting>

    <UserGreeting 
    username="BroCode" 
    isLoggedIn={true} >
    </UserGreeting>
 */

export default App
