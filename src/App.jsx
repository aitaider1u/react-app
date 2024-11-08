import Student from './Student.jsx'
import './App.css'

function App() {
    return(
        <>
            <Student 
                name="SpongeBob"
                age={12}
                isStudent={true}
            />
            
            <Student 
                name="Partick"
                age={30}
                isStudent={false}
            />

            <Student 
                name="Emely"
                age={25}
                isStudent={true}
            />

            <Student 
                name="Larry"
            />
            <Student></Student>
        </>
    );
}

export default App
