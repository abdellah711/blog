import * as Styled from './styles'
import { Logo } from 'components/Header'
import GithubIcon from '../../../assets/icons/github.svg'
import TwitterIcon from '../../../assets/icons/twitter-outline.svg'
import InstaIcon from '../../../assets/icons/instagram.svg'
import YTIcon from '../../../assets/icons/youtube.svg'

const socialmedia = [
    {
        icon: <TwitterIcon/>,
        link: '#',
        title: 'twitter',
    },
    {
        icon: <InstaIcon/>,
        link: '#',
        title: 'intagram',
    },
    {
        icon: <GithubIcon/>,
        link: '#',
        title: 'github'
    },
    {
        icon: <YTIcon/>,
        link: '#',
        title: 'youtube',
    }
]

const About = () => {
    return (
        <Styled.Container>
            <Logo />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, facilis vitae non dolorem velit distinctio at amet doloribus illo nostrum rem magnam numquam fugiat illum dolores voluptatem porro consequuntur expedita quos. Architecto itaque quibusdam cupiditate cum? Dicta omnis tempora dolores nam et laborum natus velit quod aspernatur mollitia! Distinctio, odio?
            </p>
            <Styled.SocialMediaContainer>
                {socialmedia.map(({ link, icon, title }) => (
                    <Styled.SocialMediaLink key={title} title={title} href={link}>
                        {icon}
                    </Styled.SocialMediaLink>
                ))}
            </Styled.SocialMediaContainer>
        </Styled.Container>
    )
}

export default About