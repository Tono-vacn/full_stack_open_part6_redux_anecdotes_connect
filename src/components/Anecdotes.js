//import { useDispatch,useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from '../reducers/notificationReducer'
import { connect } from "react-redux"

const Anecdote = ({anecdote,handleVote}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleVote}>vote</button>
            </div>
        </div>
    )
}

const AnecdotesList = (props) => {
    //const dispatch = useDispatch()
    // const anecdotes = useSelector(state => state.anecdotes)
    // const filter = useSelector(state => state.filter)
    //const notification = useSelector(state => state.notification)

    const vote = (id) => {
        //console.log('vote', id)
        const anecdoteToChange = props.anecdotes.find(anecdote => anecdote.id === id)
        props.voteAnecdote(id,{...anecdoteToChange,votes: anecdoteToChange.votes + 1})
        props.setNotification(`you voted '${props.anecdotes.find(anecdote => anecdote.id === id).content}'`,5)
    }

    return (
        <div>
            {//sort before show:
             //had to map first: otherwise state mutation error

            props.anecdotes.map(anecdote=>anecdote).sort((a,b) => b.votes - a.votes).filter(
                anecdote =>anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
            .map(anecdote =>
                //anecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => vote(anecdote.id)}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
}
const ConnectedAnecdotesList = connect(mapStateToProps, mapDispatchToProps)(AnecdotesList)
export default ConnectedAnecdotesList