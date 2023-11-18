import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"
import { Header } from "../../Layout/header/header"
import exampleImg from'../../image/gameImg.jpg'
import '../../scss/mainpage.scss';
import { Link } from "react-router-dom";

export const Index = () => {
    return(
        <>
            <Header></Header>
            
            <main>
                <Link to="/ladder">
                    <Card className="card">
                        <CardImg className="cardImg" variant="top" src={exampleImg} alt="Card image" />
                        <CardBody className="cardBody">
                            <CardTitle>사다리타기</CardTitle>
                            <CardText className="cardText">
                                사다리타기를 통해 벌칙자를 결정해보세요!
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>

                <Link to="/drowlots">
                    <Card className="card">
                        <CardImg className="cardImg" variant="top" src={exampleImg} alt="Card image" />
                        <CardBody className="cardBody">
                            <CardTitle>제비뽑기</CardTitle>
                            <CardText className="cardText">
                                제비뽑기를 통해 벌칙자를 결정하세요!
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>

                <Link to="/drowlots">
                    <Card className="card">
                        <CardImg className="cardImg" variant="top" src={exampleImg} alt="Card image" />
                        <CardBody className="cardBody">
                            <CardTitle>제비뽑기</CardTitle>
                            <CardText className="cardText">
                                제비뽑기를 통해 벌칙자를 결정하세요!
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>         

                <Link to="/drowlots">
                    <Card className="card">
                        <CardImg className="cardImg" variant="top" src={exampleImg} alt="Card image" />
                        <CardBody className="cardBody">
                            <CardTitle>제비뽑기</CardTitle>
                            <CardText className="cardText">
                                제비뽑기를 통해 벌칙자를 결정하세요!
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>                        
            </main>
        </>
    )
}