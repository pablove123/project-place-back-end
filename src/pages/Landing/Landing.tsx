// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Hello {user ? user.name : 'friend'}!</h1>
      <h2>{user ? 'Click Projects to check out some of our projects!' : 'Sign in to see our projects posted'}</h2>
      <h2>{user ? 'Or even create your own!' : 'and post your own Project'}</h2>
    </main>
  )
}

export default Landing
