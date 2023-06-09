import { Carousel} from "react-bootstrap"
import { ItemsCarrusel } from './ItemsCarrusel';

const Carrusel = () =>{ 

    return (
        <Carousel>
            <ItemsCarrusel/>
            <ItemsCarrusel/>
            <ItemsCarrusel/>
        </Carousel>
    )

}

export { Carrusel }