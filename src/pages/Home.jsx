import Feature from '../components/feature'
import OptForm from '../components/opt-form'
import AccordionContainer from '../containers/AccordionContainer'
import FooterContainer from '../containers/FooterContainer'
import HeaderContainer from '../containers/HeaderContainer'
import JumbotronContainer from '../containers/JumbotronContainer'

function Home({ user }) {
  return (
    <>
      <HeaderContainer user={user}>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}

export default Home
