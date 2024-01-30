import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName : 'mornaeldernar',
        name : 'Rafael Jimenez Orozco',
        isFollowing: true
    },
    {
        userName : 'midudev',
        name : 'Midu dev',
        isFollowing: false
    },
    {
        userName : 'pheral',
        name : 'Paco Hernandez',
        isFollowing: false
    },
    {
        userName : 'TMChein',
        name : 'Tomas',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='App'>
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                        key={userName}
                        initialIsfollowing={isFollowing}
                        userName={userName}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        </section>
    )
}