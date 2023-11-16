import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"
import { Header } from "../../Layout/header/header"
import exampleImg from'../../image/gameImg.jpg'
import '../../scss/mainpage.scss';

export const Index = () => {
    return(
        <>
            <Header></Header>
            
            <main>
                <Card className="card">
                    <CardImg variant="top" src={exampleImg} alt="Card image" />
                    <CardBody>
                        <CardTitle>사다리타기</CardTitle>
                        <CardText>
                            사다리타기를 통해 벌칙자를 결정해보세요!
                        </CardText>
                    </CardBody>
                </Card>

                <Card className="card">
                    <CardImg variant="top" src={exampleImg} alt="Card image" />
                    <CardBody>
                        <CardTitle>사다리타기</CardTitle>
                        <CardText>
                            사다리타기를 통해 벌칙자를 결정해보세요!
                        </CardText>
                    </CardBody>
                </Card>
            </main>
        </>
    )
}